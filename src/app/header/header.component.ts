import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
@HostListener('window:scroll', ['$event'])
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll',this.onWindowScroll, true)
  }

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('grey-nav');
    } else {
      element.classList.remove('grey-nav');
    }
  }
}
