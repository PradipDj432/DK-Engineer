import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  
}
