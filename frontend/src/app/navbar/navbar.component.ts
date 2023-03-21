import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { AuthServiceService } from '../_services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isConnected = false;

  constructor( private authService: AuthServiceService, private router: Router) {

  }

  check = false;

  toggleDisplay()
  { 
    this.check = !this.check;
  }

  ngOnInit(): void {
    gsap.fromTo(".navbar", { y: -100}, {duration: 1.5, y: 0});
    this.checkUser();
  }

  checkUser(){ 
    if(this.authService.check()){
      return this.isConnected = true;
    }
  }

  logOutUser(){
    this.authService.logout();
    this.isConnected = false;
  }

  reloadPage(): void {
    window.location.reload();
  }
}