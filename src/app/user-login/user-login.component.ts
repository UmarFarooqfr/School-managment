import { Component } from '@angular/core';
import { commonService } from '../service-name.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  userLoginFrom: FormGroup;
  constructor(private commonService: commonService, private formBuilder: FormBuilder, private router: Router, public toastr: ToastrService) {
    this.userLoginFrom = this.formBuilder.group({
      // Define your form controls and their initial values here
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
      // ... add more form controls as needed
    });
    const data = {
      userName: 'umar farooq',

      password: 'Umarfarooq@4985',
    }
    localStorage.clear()
  }
  logIn() {
    this.commonService.login(this.userLoginFrom.value).subscribe((userLogin: any) => {
      if (userLogin) {
        console.log('userLogin: ', userLogin);
        localStorage.setItem('key_Token', userLogin?.jwt_Token)
        this.router.navigate(['/dashboard/home'])
        const userData = {
          userName: userLogin.userName,
          email: userLogin.email
        }
        localStorage.setItem('user', JSON.stringify(userData))


      }
    })
  }
}
