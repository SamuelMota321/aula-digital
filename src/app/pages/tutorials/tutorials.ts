import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  imports: [],
  templateUrl: './tutorials.html',
  styleUrl: './tutorials.scss'
})
export class Tutorials {
  card: any
  constructor(private router: Router) {
    this.card = this.router.getCurrentNavigation()?.extras.state?.['card'];
  }
  
  playVideo() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const src = iframe.getAttribute('src');
      if (src && !src.includes('autoplay=1')) {
        iframe.setAttribute('src', src + '?autoplay=1');
      }
    }
  }
}
