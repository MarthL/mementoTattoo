import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TattoosService } from '../_services/tattoos.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tattoo',
  templateUrl: './add-tattoo.component.html',
  styleUrls: ['./add-tattoo.component.scss']
})
export class AddTattooComponent implements OnInit {


  myForm: FormGroup;
  tattoo: any;
  selectedFile: File;


  constructor(private fb: FormBuilder, private tattooService: TattoosService, private router: Router) {
    this.myForm = this.fb.group({
      name: '',
      description: '',
      img: null // définir la valeur initiale à null
    });
  }
  ngOnInit() {
  }

  onFileSelected(event){
    const file: File = event.target.files[0];
    if(file !== undefined && file !== null) {
      this.myForm.patchValue({
        img: file // Utiliser le file object lui-même
      });
      this.selectedFile = file;
    }
  }

  sendForm() { 
    const payload = this.myForm.value;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };
    this.tattooService.post('', payload, options).subscribe((response)=> { 
      console.log(response); 
      Swal.fire('Tattoo added', '', 'success');
      this.router.navigate(['/tattoos']);
    }, error => {
      console.error(error);
      Swal.fire('An error has occurred', '', 'error');
    });
  }
  
}
