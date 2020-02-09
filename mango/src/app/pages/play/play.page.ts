import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../../models/quiz.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  public quizList;
constructor(
  private firestoreService: FirestoreService,
  private router: Router
) {}

  ngOnInit() {
    this.quizList = this.firestoreService.getQuizList().valueChanges();
  }
}
