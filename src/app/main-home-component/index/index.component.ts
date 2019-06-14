import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from './../image-slider/image-slider.component';
import { MainPageContentComponent } from './../main-page-content/main-page-content.component';
import { FooterContentComponent } from './../footer-content/footer-content.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
