import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { FirestoreService } from './data/firestore.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
 
  constructor(private firestoreService: FirestoreService,){}
  registerUser(value){
  
   this.firestoreService.createUser(value.email,'user',0).then(res => {
    console.log(res);
  }, err => {
    console.log(err);

  })
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    .then(
      res => resolve(res),
      err => reject(err))
  })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }
 
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }
}