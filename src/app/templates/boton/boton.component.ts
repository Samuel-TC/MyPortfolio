import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger,style,transition,animate, state } from '@angular/animations'

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.sass'],
  animations: [
    trigger('scrollAnimationBtn',[
      state('scrolled', style({
        opacity:0
      })),
      state('normal', style({
       
        opacity:1
    
      })),
      transition('scrolled => normal', animate('800ms ease-out')),
      transition('normal => scrolled', animate('800ms ease-in'))
    ]),
  ]
})
export class BotonComponent implements OnInit {
  state = 'scrolled'
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }
  
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      console.log(scrollPosition)
      if (scrollPosition == 0) {
       
        this.state = 'scrolled'
      } else {
        
        this.state = 'normal'
      }

    }

}
