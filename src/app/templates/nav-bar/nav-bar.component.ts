import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { trigger,style,transition,animate, state } from '@angular/animations'

//Barr denavegacion
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
  animations: [
    trigger('scrollAnimationNav',[
      state('scrolled', style({
        backgroundColor: 'white'
      })),
      state('normal', style({
       
        backgroundColor: '#010409',
        color:'white'
    
      })),
      transition('scrolled => normal', animate('300ms ease-out')),
      transition('normal => scrolled', animate('300ms ease-in'))
    ]),
    trigger('scrollAnimationTex',[
      state('scrolled', style({
        
        color:'#010409'
      })),
      state('normal', style({
       
        color:'#EAEBED',
   
    
      })),
      transition('scrolled => normal', animate('300ms ease-out')),
      transition('normal => scrolled', animate('300ms ease-in'))
    ]),
    trigger('scrollAnimationBar',[
      state('scrolled', style({
        
        backgroundColor:'#010409'
      })),
      state('normal', style({
       
        backgroundColor:'#EAEBED',
    
      })),
      transition('scrolled => normal', animate('300ms ease-out')),
      transition('normal => scrolled', animate('300ms ease-in'))
    ])
  ]
})
export class NavBarComponent implements OnInit {
  state = 'scrolled'
  constructor(private router: Router, private activeRouter: ActivatedRoute, public el: ElementRef) { }

  ngOnInit( ): void {
    const navbarLink = document.getElementsByClassName('nav-link')[0]
    if(!navbarLink.classList.toggle('active')){
      navbarLink.classList.toggle('active')
    }
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
     
      if (scrollPosition <= componentPosition) {
       
        this.state = 'scrolled'
      } else {
        
        this.state = 'normal'
      }

    }

  clickbtn(){
    const links = document.getElementsByClassName('nav-link');
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (link) {
        link.classList.toggle('active');
      }
    }
  }
  

}
