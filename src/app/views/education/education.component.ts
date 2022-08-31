import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger,style,transition,animate, state } from '@angular/animations'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass'],
  animations: [
    trigger('scrollAnimationEducation',[
      state('scrolled', style({
        transform: 'translateX(-100%)',
        opacity:0 
      })),
      state('normal', style({
        transform: 'translateX(0)',
        opacity:1 
      })),
      transition('scrolled => normal', animate('1000ms ease-out')),
      transition('normal => scrolled', animate('1000ms ease-in'))
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
      if (scrollPosition <= componentPosition-600) {
       
        this.state = 'scrolled'
      } else {
        
        this.state = 'normal'
        this.inEducation()
      }
  }

  inEducation(){
    const navbarLink = document.getElementsByClassName('nav-link')[0]
    const navbarLink2 = document.getElementsByClassName('nav-link')[1]
    const navbarLink3 = document.getElementsByClassName('nav-link')[2]
    const navbarLink4 = document.getElementsByClassName('nav-link')[3]
    const navbarLink5 = document.getElementsByClassName('nav-link')[4]

    navbarLink.classList.remove('active')
    navbarLink2.classList.remove('active')
    navbarLink4.classList.remove('active')
    navbarLink5.classList.remove('active')
    if(!navbarLink3.classList.toggle('active')){
      navbarLink3.classList.toggle('active')
    }
  }
  ngOnInit(): void {
  }

  viewSCRUM(){
    window.open('file')?.document.write('<iframe src="' + '../assets/Certificate.pdf'  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }

}
