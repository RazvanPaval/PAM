import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { firestore, constructor } from 'firebase';
import { Quiz } from '../../models/quiz.interface';
import { User } from '../../models/user.inteface';
@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {
 }
createQuiz(
  category: string,
  quiz: string,
  rquiz1: string,
  rquiz2: string,
  rquiz3:string
): Promise<void> {
  const id = this.firestore.createId();
return this.firestore.doc(`quizList/${id}`).set({
    category,
    quiz,
    rquiz1,
    rquiz2,
    rquiz3,
  });
}



createUser(
  email: string,
  role: string,
  score: Number,
): Promise<void> {
  const id = this.firestore.createId();
return this.firestore.doc(`userList/${id}`).set({
    email,
    role,
    score
  });
}
getQuizList(): AngularFirestoreCollection<Quiz> {
  return this.firestore.collection(`quizList`);
}

}
