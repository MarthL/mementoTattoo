import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TattoosService } from '../_services/tattoos.service';

@Component({
  selector: 'app-last-content',
  templateUrl: './last-content.component.html',
  styleUrls: ['./last-content.component.scss']
})
export class LastContentComponent implements OnInit {

  constructor(private tattooService: TattoosService, private router: Router) { }

  tattoos: any = []

  ngOnInit(): void {
    this.getLast()
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
