import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from 'src/app/components/slides/slides.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomePage,SlidesComponent]
})
export class WelcomePageModule { }
