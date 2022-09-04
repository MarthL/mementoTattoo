import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  check = false;

  toggleDisplay()
  { 
    this.check = !this.check;
  }

  constructor() { 
  }

  ngOnInit(): void {
    gsap.fromTo(".navbar", { y: -100}, {duration: 1.5, y: 0});
  }
}