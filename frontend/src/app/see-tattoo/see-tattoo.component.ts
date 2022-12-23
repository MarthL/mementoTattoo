import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscriber } from 'rxjs';
import { TattoosService } from '../_services/tattoos.service';

@Component({
  selector: 'app-see-tattoo',
  templateUrl: './see-tattoo.component.html',
  styleUrls: ['./see-tattoo.component.scss']
})
export class SeeTattooComponent implements OnInit {

  tattoo: any;
  id: any;

  constructor(private tattooService: TattoosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idTattoo = this.route.params.subscribe((params) => { 
      
      this.id = +params['id']
      return this.id
    })
    this.getData(this.route.snapshot.params.id)
  }

  getData(id: any) { 
    
    this.tattooService.get(id).subscribe((data: any) => { 
      this.tattoo = data;
      // alert(this.tattoo[0].name)
      return this.tattoo;
    },
    (error) => { 
      console.log('error' + error)
    });

  }

}
