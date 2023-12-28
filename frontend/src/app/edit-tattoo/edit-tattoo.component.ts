import { Component, OnInit } from '@angular/core';
import { TattoosService } from '../_services/tattoos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  myForm: UntypedFormGroup;
  selectedImage: File;

  constructor(private tattooService: TattoosService, private route: ActivatedRoute, private fb: UntypedFormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {
    const idTattoo = this.route.params.subscribe((params) => { 
      this.id = +params['id']
      return this.id
    })
    this.getData(this.route.snapshot.params.id)
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  getFileName(filePath: string): string {
    return filePath.replace(/^.*\\/, '');
  }

  getData(id: any) { 
    this.tattooService.get(id).subscribe((data: any) => { 
      this.tattoo = data;
      this.name = this.tattoo[0].name;
      this.description = this.tattoo[0].description;
      return this.tattoo;
    },
    (error) => { 
      console.log('error' + error)
    });

  }

  sendForm() { 
    if (this.myForm.invalid) {
      return;
    }
  
    const formData = new FormData();
  
    formData.append('name', this.myForm.get('name').value);
    formData.append('description', this.myForm.get('description').value);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage, this.getFileName(this.selectedImage.name));
    }
  
    this.tattooService.patch(this.route.snapshot.params.id, formData).subscribe((data) => { 
      this.tattoo = data; 
      return this.tattoo;
    });
  
    Swal.fire({title: 'Good job', text: 'you just edited the tattoo : ' + this.myForm.get('name').value, icon: 'success'});
    this.router.navigate(['/tattoos']);
  }

}
