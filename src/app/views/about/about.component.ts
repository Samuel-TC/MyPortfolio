import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [
    trigger('scrollAnimationAbout', [
      state('initial', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('scrolled', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('normal', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('initial => normal', animate('1000ms ease-out')),
      transition('normal => scrolled', animate('1000ms ease-in')),
      transition('void => initial', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1000ms ease-out')
      ]),
      transition('initial => normal, scrolled => normal', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1000ms ease-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  state = 'initial'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition <= componentPosition - 800) {
      this.state = 'scrolled'
    } else {
      this.state = 'normal'
      this.inAbout()
    }
  }

  inAbout() {
    const navbarLinks = document.getElementsByClassName('nav-link');
    Array.from(navbarLinks).forEach((link) => {
      link.classList.remove('active');
    });
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    navbarLink2.classList.add('active');
  }

  ngOnInit(): void {
    this.state = 'initial';
    document.body.style.overflowX = 'hidden'; // agregamos la propiedad overflow-x: hidden
  }

}
