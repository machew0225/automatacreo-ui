import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    const element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-dark');
    } else {
      element.classList.remove('bg-dark');
    }
  }
    // tslint:disable-next-line: typedef
    goToElement(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth'});
  }

  toggle() {
    const element = document.getElementById('navbarNav');
    if (element.classList.contains('collapse')) {
      element.classList.remove('collapse');
    } else {
      element.classList.add('collapse');
    }
  }
}
