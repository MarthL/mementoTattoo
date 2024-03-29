import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { AuthServiceService } from '../_services/auth-service.service';
import { TokenStorageService } from '../_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: UntypedFormGroup;


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
    this.formGroup = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required])
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
          Swal.fire({
            title: 'Congratulations ! you are connected', 
            icon: 'success',
            confirmButtonText: 'Continue'
          }).then((response) => { 
            if(response.isConfirmed) { 
              this.reloadPage();
              this.router.navigate(['/'])
            }
          })
        } else { 
          alert('Echec : ' + data.email)
        }
      })
    }
  }
}