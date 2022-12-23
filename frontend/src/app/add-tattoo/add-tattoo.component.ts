import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TattoosService } from '../_services/tattoos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tattoo',
  templateUrl: './add-tattoo.component.html',
  styleUrls: ['./add-tattoo.component.scss']
})
export class AddTattooComponent implements OnInit {


  myForm: FormGroup;
  tattoo: any;


  constructor(private fb: FormBuilder, private tattooService: TattoosService, private router: Router) {
    let self = this

    this.myForm = this.fb.group({
      name: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  sendForm() { 
    const formValue = this.myForm.value 
    console.log(formValue)
    this.tattooService.post('', formValue).subscribe((data)=> { 
      this.tattoo = data; 
      return this.tattoo
    })
    Swal.fire({title: 'Good job', text: 'you just had the tattoo : ' + formValue.name, icon: 'success'})
    this.router.navigate(['/tattoos'])
  }

  
}
