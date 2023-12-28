import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TattoosService } from '../_services/tattoos.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { AuthServiceService } from '../_services/auth-service.service';


@Component({
  selector: 'app-tattoos-list',
  templateUrl: './tattoos-list.component.html',
  styleUrls: ['./tattoos-list.component.scss']
})
export class TattoosListComponent implements OnInit {

  public tattoos: any = [];


  constructor(private tattooService: TattoosService, private router: Router, private auth: AuthGuard, public authService: AuthServiceService) {

    let self = this;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.tattooService.getAll().subscribe((data: any) => {
      this.tattoos = data
      console.log(this.tattoos)
      return this.tattoos as [];
    }, (error) => {
      console.log('error' + error)
    });
  }

  deleteTattoo(id: any) {
    if (!this.router.navigateByUrl('tattoos/add')) {
      Swal.fire('You need to be loggedin', '', 'info');
      return false;
    } else {
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
          console.log('sleep');
          Swal.fire({
            title: 'Tattoo has been deleted !', 
            icon: 'info',
            confirmButtonText: 'OK'
          }).then((result) => {
            if(result.isConfirmed) 
              this.router.navigate(['/tattoos']
              )
            });
          
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'success')
        }
      })
    }
  }





}
