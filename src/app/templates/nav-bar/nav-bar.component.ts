import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { trigger,style,transition,animate, state } from '@angular/animations'

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
      transition('scrolled => normal', animate('500ms ease-out')),
      transition('normal => scrolled', animate('500ms ease-in'))
    ]),
    trigger('scrollAnimationTex',[
      state('scrolled', style({
        
        color:'#010409'
      })),
      state('normal', style({
       
        color:'#EAEBED',
   
    
      })),
      transition('scrolled => normal', animate('500ms ease-out')),
      transition('normal => scrolled', animate('500ms ease-in'))
    ]),
    trigger('scrollAnimationBar',[
      state('scrolled', style({
        
        backgroundColor:'#010409'
      })),
      state('normal', style({
       
        backgroundColor:'#EAEBED',
    
      })),
      transition('scrolled => normal', animate('500ms ease-out')),
      transition('normal => scrolled', animate('500ms ease-in'))
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
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLink = document.getElementsByClassName('nav-link')[0];
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    const navbarLink3 = document.getElementsByClassName('nav-link')[2];
    const navbarLink4 = document.getElementsByClassName('nav-link')[3];
    const navbarLink5 = document.getElementsByClassName('nav-link')[4];
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink.classList.toggle('active');
    navbarLink2.classList.toggle('active');
    navbarLink3.classList.toggle('active');
    navbarLink4.classList.toggle('active');
    navbarLink5.classList.toggle('active');
    navbarLink6.classList.toggle('active');

  }

  contactLink(){

    const navbarLink = document.getElementsByClassName('nav-link')[0]
    const navbarLink2 = document.getElementsByClassName('nav-link')[1]
    const navbarLink3 = document.getElementsByClassName('nav-link')[2]
    const navbarLink4 = document.getElementsByClassName('nav-link')[3]
    const navbarLink5 = document.getElementsByClassName('nav-link')[4]
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink.classList.remove('active')
    navbarLink2.classList.remove('active')
    navbarLink3.classList.remove('active')
    navbarLink4.classList.remove('active')
    navbarLink5.classList.remove('active');
    
    if(!navbarLink6.classList.toggle('active')){
      navbarLink6.classList.toggle('active')
    }
 
  }

  educationLink(){

    const navbarLink = document.getElementsByClassName('nav-link')[0];
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    const navbarLink3 = document.getElementsByClassName('nav-link')[2];
    const navbarLink4 = document.getElementsByClassName('nav-link')[3];
    const navbarLink5 = document.getElementsByClassName('nav-link')[4];
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink.classList.remove('active');
    navbarLink2.classList.remove('active');
    navbarLink4.classList.remove('active');
    navbarLink5.classList.remove('active');
    navbarLink6.classList.remove('active');
    if(!navbarLink3.classList.toggle('active')){
      navbarLink3.classList.toggle('active')
    }
 
  }

  skillsLink(){

    const navbarLink = document.getElementsByClassName('nav-link')[0];
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    const navbarLink3 = document.getElementsByClassName('nav-link')[2];
    const navbarLink4 = document.getElementsByClassName('nav-link')[3];
    const navbarLink5 = document.getElementsByClassName('nav-link')[4];
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink.classList.remove('active')
    navbarLink2.classList.remove('active')
    navbarLink3.classList.remove('active')
    navbarLink5.classList.remove('active')
    navbarLink6.classList.remove('active');
    if(!navbarLink4.classList.toggle('active')){
      navbarLink4.classList.toggle('active')
    }
 
  }

  projectLink(){

    const navbarLink = document.getElementsByClassName('nav-link')[0];
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    const navbarLink3 = document.getElementsByClassName('nav-link')[2];
    const navbarLink4 = document.getElementsByClassName('nav-link')[3];
    const navbarLink5 = document.getElementsByClassName('nav-link')[4];
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink.classList.remove('active');
    navbarLink2.classList.remove('active');
    navbarLink3.classList.remove('active');
    navbarLink4.classList.remove('active');
    navbarLink6.classList.remove('active')
    if(!navbarLink5.classList.toggle('active')){
      navbarLink5.classList.toggle('active')
    }
 
  }

  aboutLink(){

    const navbarLink = document.getElementsByClassName('nav-link')[0];
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    const navbarLink3 = document.getElementsByClassName('nav-link')[2];
    const navbarLink4 = document.getElementsByClassName('nav-link')[3];
    const navbarLink5 = document.getElementsByClassName('nav-link')[4];
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink.classList.remove('active');
    navbarLink3.classList.remove('active');
    navbarLink4.classList.remove('active');
    navbarLink5.classList.remove('active');
    navbarLink6.classList.remove('active');
    if(!navbarLink2.classList.toggle('active')){
      navbarLink2.classList.toggle('active');
    }
 
  }

  homeLink(){

    const navbarLink = document.getElementsByClassName('nav-link')[0];
    const navbarLink2 = document.getElementsByClassName('nav-link')[1];
    const navbarLink3 = document.getElementsByClassName('nav-link')[2];
    const navbarLink4 = document.getElementsByClassName('nav-link')[3];
    const navbarLink5 = document.getElementsByClassName('nav-link')[4];
    const navbarLink6 = document.getElementsByClassName('nav-link')[5];

    navbarLink2.classList.remove('active');
    navbarLink3.classList.remove('active');
    navbarLink4.classList.remove('active');
    navbarLink5.classList.remove('active');
    navbarLink6.classList.remove('active');
    if(!navbarLink.classList.toggle('active')){
      navbarLink.classList.toggle('active');
    }
 
  }
}
