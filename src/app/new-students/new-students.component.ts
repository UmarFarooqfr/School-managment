import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { commonService } from '../service-name.service';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})
export class NewStudentsComponent {
  studentsForm: FormGroup;
  studentDetails: any;
  constructor(private formBuilder: FormBuilder, private router: Router, public toastr: ToastrService, private commonSerivice: commonService, private route: ActivatedRoute) {
    this.studentsForm = this.formBuilder.group({
      studentName: ['', [Validators.required, Validators.minLength(4)]],
      DOB: ['', [Validators.required]],
      CNIC: ['', [Validators.required, this.cnicValidator()]],
      guardianName: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      emrgencyContct: ['', [Validators.required]],
      previousEducation: ['', [Validators.required]],
      preResultEducation: ['', [Validators.required]],
      referBy: ['']
    });
    this.route.queryParams.subscribe(params => {
      const id: any = params['id']; // 'id' should match the key you used when setting the query parameter
      if (id) {
        // Now you can use the 'id' in your component
        console.log('Received id from query parameter:', id);
        this.commonSerivice.getStudentById(id).subscribe((databyId: any) => {
          console.log('databyId: ', databyId);
          this.studentDetails = databyId[0]
          this.studentsForm.patchValue(databyId[0])

        })
      }
    });
  }
  cnicValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cnic = control.value;
      if (!cnic) {
        return null; // If the CNIC field is empty, no validation error
      }

      // Check if CNIC is 13 characters and starts with '3'
      const isValid = /^3\d{12}$/.test(cnic);
      return isValid ? null : { invalidCNIC: true };
    };
  }
  addStudent() {
    console.log('this.studentsForm.value: ', this.studentsForm.value);
    if (this.studentDetails) {
      const formValue = {
        id: this.studentDetails._id,

      }

      const formValues = this.studentsForm.value;
      const replicaObject = {
        id: this.studentDetails._id,
        studentName: formValues.studentName,
        DOB: formValues.DOB,
        CNIC: formValues.CNIC,
        guardianName: formValues.guardianName,
        address: formValues.address,
        emrgencyContct: formValues.emrgencyContct,
        previousEducation: formValues.previousEducation,
        preResultEducation: formValues.preResultEducation,
        referBy: formValues.referBy
      };

      this.commonSerivice.updateStudentById(replicaObject).subscribe((data: any) => {
        if (data) {
          this.router.navigate(['/dashboard/home']);
          this.studentsForm.reset()
        }
      })
    } else {

      this.commonSerivice.addNewStudent(this.studentsForm.value).subscribe((studentData: any) => {
        if (studentData) {
          console.log('studentData: ', studentData);
          this.studentsForm.reset()

        }
      })
    }
  }
}
