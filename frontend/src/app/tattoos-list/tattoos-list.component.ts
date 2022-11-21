import { Component, OnInit } from '@angular/core';
import { TattoosService } from '../tattoos.service';

@Component({
  selector: 'app-tattoos-list',
  templateUrl: './tattoos-list.component.html',
  styleUrls: ['./tattoos-list.component.scss']
})
export class TattoosListComponent implements OnInit {

  public tattoos:any = [];
  constructor(private tattooService: TattoosService) { 

    let self = this;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() { 
    this.tattooService.getAll().subscribe( (data) => { 
      this.tattoos = data
      console.log(this.tattoos)
      return this.tattoos;
    }, (error) => { 
      console.log('error' + error)
    });
  }

  deleteTattoo(id: any) { 
    console.log( 'suppression id : ' + id)
    this.tattooService.delete(id).subscribe((data: any) => { 
      this.tattoos = data 
      return this.tattoos; 
    }, (error) => { 
      console.log('error : ' + error)
    })
  }

  

}
