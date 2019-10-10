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

  constructor(private AFauth : AngularFireAuth, private Afirebase: AngularFireDatabase) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password)
      .then(user =>{
        //this.getUser();
        this.Afirebase.database.ref(`user/${this.AFauth.auth.currentUser.uid}`).once('value')
          .then(snapshot => {// read the User from DB
            this.currentUser =  snapshot.val();
          });
        resolve(user);
      }).catch(err => rejected(err));
    });

  }

  register(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password)
      .then(user =>{ //adds the User to the DB table "user"
        this.currentUser.email = email;
        this.Afirebase.database.ref('user').child(user.user.uid).set(this.currentUser);
        resolve(user);
      }).catch(err => rejected(err));
    });

  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      if(this.AFauth.auth.currentUser){
        this.AFauth.auth.signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
}
