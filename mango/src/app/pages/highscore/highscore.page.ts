import { Component, OnInit } from '@angular/core';
import { Highscore } from './highscore.model';
import {ApiService} from "src/app/api/api.service"
import {Product} from "src/app/model/product.model"
import { from } from 'rxjs';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.page.html',
  styleUrls: ['./highscore.page.scss'],
})
export class HighscorePage implements OnInit {
  public highscore: Array<Highscore>=new Array<Highscore>();
  public products:Array<Product>=[];
  constructor(private apiService) { 
   /* this.highscore.push(new Highscore("ALeq",20));
    this.highscore.push(new Highscore("ALin",60));
    this.highscore.push(new Highscore("Dan",40));
    this.highscore.push(new Highscore("Florin",10));
    this.highscore.push(new Highscore("Albert",70));*/
  }

  ngOnInit() {
    /*this.apiService.getAllProducts().subscriber(res=>{
      console.log(res);*/
      this.apiService.getAllProducts().subscribe(apiProducts => {
        for(let prod of apiProducts){
          this.products.push(new Product(prod.name,prod.description,prod.id));
        }
    });
  }

}
