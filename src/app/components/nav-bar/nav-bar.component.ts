import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';//paso3

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {

    
  }
  llegarAqui(){
    const config: ScrollToConfigOptions={
      target: 'llegarAqui',
      easing: 'easeOutElastic',
      duration: 80
    }
  this.scrollToService.scrollTo(config)
  }
  caerAqui(){
    const config: ScrollToConfigOptions={
      target: 'caerAqui',
      easing: 'easeOutElastic',
      duration: 80
    }
  this.scrollToService.scrollTo(config)
  }

  llevarAqui(){
    const config: ScrollToConfigOptions={
      target: 'llevarAqui',
      easing: 'easeOutElastic',
      duration: 80
    }
  this.scrollToService.scrollTo(config)
  }

  enviarAqui(){
    const config: ScrollToConfigOptions={
      target: 'enviarAqui',
      easing: 'easeOutElastic',
      duration: 80
    }
  this.scrollToService.scrollTo(config)
  }
}
