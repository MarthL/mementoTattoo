import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TattoosService } from '../_services/tattoos.service';

@Component({
  selector: 'app-tattoos-list',
  templateUrl: './tattoos-list.component.html',
  styleUrls: ['./tattoos-list.component.scss']
})
export class TattoosListComponent implements OnInit {

  public tattoos: any = [];

  
  constructor(private tattooService: TattoosService) { 

    let self = this;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() { 
    this.tattooService.getAll().subscribe( (data: any) => { 
      this.tattoos = data
      console.log(this.tattoos)
      return this.tattoos as [];
    }, (error) => { 
      console.log('error' + error)
    });
  }

  deleteTattoo(id: any) { 
    console.log( 'suppression id : ' + id)

    Swal.fire({
      title: 'Are you sure you want to delete this tattoo ?',
      showDenyButton: true,
      confirmButtonText: 'Yep ! delete it',
      denyButtonText: `No, I changed my mind...`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.tattooService.delete(id).subscribe((data: any = []) => { 
          this.tattoos = data 
          return this.tattoos; 
        }, (error) => { 
          console.log('error : ' + error)
        })
        setTimeout(() => {
          console.log('sleep');
          Swal.fire('Tattoo has been deleted !', '', 'info')
          // And any other code that should run only after 5s
        }, 5000);
        this.reloadPage()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'success')
      } 
    })


  }
 


  reloadPage(): void {
    window.location.reload();
  }
  

}
