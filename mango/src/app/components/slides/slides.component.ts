import { Component, OnInit, ViewChild } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { IonSlide, IonSlides, NavController, IonNav } from '@ionic/angular';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
     slideOpts={
    initialSlide:1,
    speed:400
  };
 

}
