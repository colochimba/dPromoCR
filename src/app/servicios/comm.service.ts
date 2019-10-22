import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message } from '../models/message';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor(private authService: AuthService, private Afirebase: AngularFireDatabase) { }

  sendMessage(msg: string) {
    const newpath = "cafeteria dos";// nombre del negocio
    const path = `message/${newpath}`;
    var newmessage = new Message();
     
      var newPostKey = this.Afirebase.database.ref().child('path').push().key;
      newmessage.key = newPostKey;
      newmessage.userName = this.authService.currentUser.email;
      newmessage.timeSent = this.getTimeStamp();
      newmessage.message = msg;
      this.Afirebase.database.ref(path).child(newPostKey).set({newmessage});
    }

   getMessages(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        var userName = this.authService.currentUser.email;
        var msgRef = this.Afirebase.database.ref('message/' + "cafeteria dos");
        msgRef.limitToLast(1).on('value', function(snapshot) {
          if(snapshot.val() !== null){
            var dMessage: Message = snapshot.child(JSON.stringify(snapshot.val()).split('"')[1]).val().newmessage;
            if(dMessage.userName !==  userName){ // if the last message is not sent by me
              if(dMessage.message === 'Ok'){
                resolve();
              }else{
                reject();
              }
            }
          }
        });
        //reject();
      }, 1000);
    });
    
} 
getTimeStamp() {
  const now = new Date();
  const date = now.getUTCFullYear() + '/' +
               (now.getUTCMonth() + 1) + '/' +
               now.getUTCDate();
  const time = now.getUTCHours() + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (date + ' ' + time);
}
}
