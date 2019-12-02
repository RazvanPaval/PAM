import { Component, OnInit } from '@angular/core';
import { Highscore } from './highscore.model';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.page.html',
  styleUrls: ['./highscore.page.scss'],
})
export class HighscorePage implements OnInit {
  public highscore: Array<Highscore>=new Array<Highscore>();
  constructor() { 
    this.highscore.push(new Highscore("ALeq",20));
    this.highscore.push(new Highscore("ALin",60));
    this.highscore.push(new Highscore("Dan",40));
    this.highscore.push(new Highscore("Florin",10));
    this.highscore.push(new Highscore("Albert",70));
  }

  ngOnInit() {
  }

}
