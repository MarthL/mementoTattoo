import { Component, OnInit } from '@angular/core';
import { TattoosService } from '../_services/tattoos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tattoo',
  templateUrl: './edit-tattoo.component.html',
  styleUrls: ['./edit-tattoo.component.scss']
})
export class EditTattooComponent implements OnInit {

  tattoo: any;
  id: any;
  description: any;
  name: any;
  myForm: FormGroup;

  constructor(private tattooService: TattoosService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: '',
      description: ''
    });
  }

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
      this.name = this.tattoo[0].name;
      this.description = this.tattoo[0].description;
      // alert(this.tattoo[0].name)
      return this.tattoo;
    },
    (error) => { 
      console.log('error' + error)
    });

  }

  sendForm() { 
    const formValue = this.myForm.value 
    console.log(formValue)
    this.tattooService.patch(this.route.snapshot.params.id, formValue).subscribe((data)=> { 
      this.tattoo = data; 
      return this.tattoo
    })
    Swal.fire({title: 'Good job', text: 'you just edited the tattoo : ' + formValue.name, icon: 'success'})
    this.router.navigate(['/tattoos'])
  }

}
