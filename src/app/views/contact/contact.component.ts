import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger,style,transition,animate, state } from '@angular/animations'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    trigger('scrollAnimationContact',[
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
export class ContactComponent implements OnInit {

  state = 'normal'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      console.log(scrollPosition)
      if (scrollPosition <= componentPosition-700) {
       
        this.state = 'normal'
      } else {
        
        this.state = 'normal'
        this.inContact()
      }

    }

  inContact(){
    const navbarLink = document.getElementsByClassName('nav-link')[0]
    const navbarLink2 = document.getElementsByClassName('nav-link')[1]
    const navbarLink3 = document.getElementsByClassName('nav-link')[2]
    const navbarLink4 = document.getElementsByClassName('nav-link')[3]
    const navbarLink5 = document.getElementsByClassName('nav-link')[4]

    navbarLink.classList.remove('active')
    navbarLink2.classList.remove('active')
    navbarLink3.classList.remove('active')
    navbarLink4.classList.remove('active')
    if(!navbarLink5.classList.toggle('active')){
      navbarLink5.classList.toggle('active')
    }
  }
  ngOnInit(): void {
  }

}
