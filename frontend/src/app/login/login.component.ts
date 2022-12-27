import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { AuthServiceService } from '../_services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;


  constructor( private authService: AuthServiceService, private router: Router) { 
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')) { 
      this.router.navigate(['/tattoos'])
    } else { 
      this.initForm();
    }
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  loginProcess() { 
    const formValue = this.formGroup.value
    if(this.formGroup.valid){
      this.authService.login(formValue)
        .subscribe((data) => {
          console.log(data)
        if(data !== null){
          // alert('IT WORKS  : ' + data.email)
          localStorage.setItem('email', data.email)
          this.reloadPage();
        } else { 
          alert('Echec : ' + data.email)
        }
      })
    }
  }
}