import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  RedirectToLocation() {
    debugger
    //let latitude ="20.3686976";
    //let longitude ="72.9217278";
    const googleMapsUrl = `https://www.google.com/maps/place/DK+ENGINEER'S/@20.3687117,72.9058486,15z/data=!3m1!4b1!4m6!3m5!1s0x3be0cfaa9d16867f:0xcd7aa57fc58c925b!8m2!3d20.3686926!4d72.9243027!16s%2Fg%2F11khmv3jxh?entry=ttu`;
    window.open(googleMapsUrl, '_blank');
  }
}
