import { AbstractType, HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  innerWidth: number;
  constructor() { }

  ngOnInit(): void {
    this.fixNavBar(window.innerWidth);
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e): void {
    const element = document.querySelector('.navbar');
    const navToggler = document.getElementById('navbarNav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-dark');
    } else {
      navToggler.classList.add('collapse');
      element.classList.remove('bg-dark');
      this.fixNavBar(window.innerWidth);
    }
  }

  onResize(e): void {
    this.innerWidth = e.target.innerWidth;
    this.fixNavBar(this.innerWidth);

  }
    goToElement(el: HTMLElement): void {
      el.scrollIntoView({behavior: 'smooth'});
      this.toggle();
  }

  toggle(): void {
    const element = document.getElementById('navbarNav');
    if (element.classList.contains('collapse')) {
      element.classList.remove('collapse');
    } else {
      element.classList.add('collapse');
    }
  }

  fixNavBar(innerWidth: number): void {
    if (innerWidth <= 991) {
      const element = document.querySelector('.navbar');
      if (!element.classList.contains('bg-dark')) {
        element.classList.add('bg-dark');
      }
    }

  }
}
