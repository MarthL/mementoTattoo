import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TattoosService } from '../_services/tattoos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tattoos: any = [];

  constructor( private tattooService: TattoosService, private router: Router) {
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('check')) { 
      if(sessionStorage.getItem('auth-token').length > 0 ) { 
        Swal.fire('You are now logged in !', '', 'success')
        sessionStorage.setItem('check', 'true')
        window.location.reload();
      }
    }
  }





} 



  // // click and modify the underlined values
  // easeImage() { 
  //   debugger
  //   gsap.to(this.tattooArm, { duration: 2.5, ease: "back.out(1.7)", y: -500 });
  // }

