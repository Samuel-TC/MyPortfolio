import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  animations: [
    trigger('scrollAnimation', [
      state('scrolled', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('normal', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('scrolled => normal', animate('1000ms ease-out')),
      transition('normal => scrolled', animate('1000ms ease-in')),
      // Agrega esta transición
      transition('void => scrolled', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('1000ms ease-out')
      ])
    ])
  ]
})
export class ProjectComponent {

  state = 'normal'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    console.log(scrollPosition)
    if (scrollPosition <= componentPosition - 700) {

      this.state = 'scrolled'
    } else {

      this.state = 'normal'
      this.inProject()
    }

  }

  inProject() {
    const navbarLinks = Array.from(document.getElementsByClassName('nav-link'));

    navbarLinks.forEach(link => link.classList.remove('active'));
    navbarLinks[4].classList.add('active');

  }
}
