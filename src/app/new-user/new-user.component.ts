import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { commonService } from '../service-name.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  registerUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private commonService: commonService) {
    this.registerUser = this.formBuilder.group({

      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],

    });
    localStorage.clear()

  }
  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;

    // Define regular expressions for each of the password criteria
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);

    // Check if all criteria are met
    const isValid = hasNumber && hasSpecialCharacter && hasCapitalLetter;

    if (!isValid) {
      // Return a validation error if the criteria are not met
      return { invalidPassword: true };
    }

    return null;
  }
  registerNewUser() {
    this.commonService.registerUser(this.registerUser.value).subscribe((data) => {
      console.log('data: ', data);
      if (data) {

        this.router.navigate(['login'])
      }
    })
  }

}
