import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selectedImage: File;

  constructor(private fb: FormBuilder, private tattooService: TattoosService, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  getFileName(filePath: string): string {
    return filePath.replace(/^.*\\/, '');
  }

  sendForm() {
    if (this.myForm.invalid) {
      return;
    }
  
    const formValue = this.myForm.value;
    const formData = new FormData();
  
    formData.append('name', formValue.name);
    formData.append('description', formValue.description);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage, this.getFileName(this.selectedImage.name));
    }
    
    this.tattooService.post('', formData).subscribe(
      (data) => { 
        this.tattoo = data; 
        Swal.fire({title: 'Good job', text: 'you just had the tattoo : ' + formValue.name, icon: 'success'});
        this.router.navigate(['/tattoos']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}