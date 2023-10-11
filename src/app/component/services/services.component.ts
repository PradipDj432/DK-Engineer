import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  
}
