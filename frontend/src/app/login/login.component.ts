import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { AuthServiceService } from '../_services/auth-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;


  constructor( private authService: AuthServiceService, private router: Router, private tokenStorage: TokenStorageService) { 
  }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) { 
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
      this.authService.login(formValue.email, formValue.password)
        .subscribe((data) => {
          console.log(data)
        if(data !== null){
          // adding some sht here 
          this.tokenStorage.saveToken(data);
          this.tokenStorage.saveUser(data);
          console.log(this.tokenStorage.getToken());
          // end 
          this.router.navigate(['/'])
        } else { 
          alert('Echec : ' + data.email)
        }
      })
    }
  }
}