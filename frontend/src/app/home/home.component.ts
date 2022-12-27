import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.getLast();
  }

  getLast() { 
    this.tattooService.getAll().subscribe((data: any) => { 
      this.tattoos = data
      return this.tattoos
    }, (error) => { 
      console.log('error : ' + error)
    })
  }




} 



  // // click and modify the underlined values
  // easeImage() { 
  //   debugger
  //   gsap.to(this.tattooArm, { duration: 2.5, ease: "back.out(1.7)", y: -500 });
  // }

