import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-ctn',
  templateUrl: './about-ctn.component.html',
  styleUrls: ['./about-ctn.component.scss']
})
export class AboutCtnComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  
}
