import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighscorePageRoutingModule } from './highscore-routing.module';

import { HighscorePage } from './highscore.page';
import { ApiModule } from 'src/app/api/api.module';
import{Routes,RouterModule} from "@angular/router"

const routes:Routes=[
  {
    path:"",
    component: HighscorePage
  }
]

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
    FormsModule,
    IonicModule,
    HighscorePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HighscorePage]
})
export class HighscorePageModule {}

