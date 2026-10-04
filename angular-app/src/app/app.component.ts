import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "DK Engineer's";
  @HostListener('window:scroll')
  onScroll() {

    if (document.documentElement.scrollTop > 0) {
      document.body.classList.add("sticky")
    }
    else {
      document.body.classList.remove("sticky")
    }
  }
}
