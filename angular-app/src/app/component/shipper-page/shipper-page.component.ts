import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';


export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-shipper-page',
  templateUrl: './shipper-page.component.html',
  styleUrls: ['./shipper-page.component.scss']
})
export class ShipperPageComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
}
