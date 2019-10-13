import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve, reject } from 'q';

import { AngularFireDatabase } from '@angular/fire/database';

import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = new User();
  authUser: firebase.User;
  constructor(private AFauth : AngularFireAuth, private Afirebase: AngularFireDatabase) { }

  login(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password)
      .then(user =>{
        this.authUser = user.user;
        if(this.authUser.emailVerified !== true){
          this.sendVerificationMail();
          window.alert('Por favor verificar su dirección de correo electrónico.');
        }else{
          this.getUserInDB();
          resolve(user);
        }
      }).catch(err => rejected(err));
    });
  }

  register(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password)
      .then(user =>{
        this.authUser = user.user;
        this.createUserInDB(email);
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      if(this.AFauth.auth.currentUser){
        this.AFauth.auth.signOut()
        .then(() => {
          this.currentUser = new User();
          this.authUser = null;
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  //adds the user object to the Dabatabse
  createUserInDB(email: string){
    this.currentUser.email = email;
    this.Afirebase.database.ref('user').child(this.authUser.uid).set(this.currentUser);
    this.sendVerificationMail();
  }

  //gets a user object from the Database
  async getUserInDB(){
    await this.Afirebase.database.ref('user/'+this.getCurrentUserKey()).once('value')
      .then(snapshot => {
        this.currentUser =  snapshot.val();
      });
  }

  //updates de user object in the Database
  updateUserInDB(){
    return new Promise((resolve, reject) => {
      this.Afirebase.database.ref('user/'+this.getCurrentUserKey()).set(this.currentUser,error=>{
        if (error) {
          reject();
        } else {
          resolve();
        }
      })
    });
  }

  //Devuelve el key del usuario logueado
  getCurrentUserKey(){
    return this.authUser.uid;
  }

  // Send email verfificaiton when new user sign up
  async sendVerificationMail() {
    return await this.authUser.sendEmailVerification();
  }

  //Envía un correo para cambio de usuario
  changePassword(email: string){
    return new Promise((resolve, reject) => {
      this.AFauth.auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
        resolve();
      }).catch(function(error) {
        // An error happened.
        reject();
      });
    });
  }
} 