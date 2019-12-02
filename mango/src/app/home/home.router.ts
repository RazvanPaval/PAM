import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { HomePage } from './home.page';


const routes:Routes=[
    {
        path:'home',
        component: HomePage,
        children:[
            {
                path:'category',
                loadChildren:()=>import('../pages/category/category.module').then(
                    m=>m.CategoryPageModule
                    )

            },
            {
                path:'play',
                loadChildren:()=>import('../pages/play/play.module').then(
                    m=>m.PlayPageModule
                    )

            },
            {
                path:'highscore',
                loadChildren:()=>import('../pages/highscore/highscore.module').then(
                    m=>m.HighscorePageModule
                    )

            }
        ]
        //aici pot sa generez alte pagini de exemplu PLAY,HIGHSCORE,CATEGORY
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouter{}