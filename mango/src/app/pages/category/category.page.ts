import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class CategoryPage implements OnInit {
  public createQuizForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private  firestoreService: FirestoreService,
    formBuilder: FormBuilder
  ) {
    this.createQuizForm = formBuilder.group({
      category: ['', Validators.required],
      quiz: ['', Validators.required],
      rquiz1: ['', Validators.required],
      rquiz2: ['', Validators.required],
      rquiz3: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  async createQuiz() {  
    const loading = await this.loadingCtrl.create();

    const category = this.createQuizForm.value.category;
    const quiz = this.createQuizForm.value.quiz;
    const rquiz1 = this.createQuizForm.value.rquiz1;
    const rquiz2 = this.createQuizForm.value.rquiz2;
    const rquiz3 = this.createQuizForm.value.rquiz3;
  
    this.firestoreService
    .createQuiz(category, quiz, rquiz1, rquiz2,rquiz3)
    .then(
      () => {
        loading.dismiss().then(() => {
         //this.router.navigateByUrl('');
        });
      },
      error => {
        console.error(error);
      }
    );

  return await loading.present();
    }
  }
