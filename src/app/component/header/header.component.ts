import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggleMobileMenu() {
    document.body.classList.toggle("change")
  }
  closemenu() {
    document.body.classList.remove("change")
  }

}
