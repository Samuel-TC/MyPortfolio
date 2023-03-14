import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass'],
  animations: [
    trigger('scrollAnimationEducation', [
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
export class EducationComponent implements OnInit {

  state = 'normal'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    console.log(scrollPosition)
    if (scrollPosition <= componentPosition - 600) {

      this.state = 'scrolled'
    } else {

      this.state = 'normal'
      this.inEducation()
    }
  }

  inEducation() {
    const navbarLinks = Array.from(document.getElementsByClassName('nav-link'));

    navbarLinks.forEach(link => link.classList.remove('active'));
    navbarLinks[2].classList.add('active');
  }

  ngOnInit(): void {
  }

  viewSCRUM() {
    window.open('file')?.document.write('<iframe src="' + '../assets/Certificate.pdf' + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }


  viewCS50() {
    window.open('file')?.document.write('<iframe src="' + '../assets/CS50x.pdf' + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }

}
