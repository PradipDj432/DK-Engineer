import { Component } from '@angular/core';

@Component({
  selector: 'app-login-section-component',
  templateUrl: './login-section-component.component.html',
  styleUrls: ['./login-section-component.component.scss']
})
export class LoginSectionComponentComponent {

  slides = [
    {img: "../../../assets/images/home_banner01.png"},
    {img: "../../../assets/images/home_banner02.jpg"},
    {img: "../../../assets/images/home_banner03.png"},
 
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , "autoplay":"true" ,
  "autoplaySpeed":1500,   "infinite": "true"};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(_e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(_e: any) {
    console.log('breakpoint');
  }
  
  afterChange(_e: any) {
    console.log('afterChange');
  }
  
  beforeChange(_e: any) {
    console.log('beforeChange');
  }
}
