import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  teacherForm: FormGroup|any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.teacherForm = this.fb.group({
      teachers: this.fb.array([this.createTeacher()]) // Initialize with one teacher field
    });
  }

  get teacherControls() {
    return this.teacherForm.get('teachers') as FormArray;
  }

  createTeacher() {
    return this.fb.group({
      name: [''],
      subject: [''],
      class: [''],
      qualification: [''],
      experience: [''],
      phonenumber: [''],
    });
  }

  addTeacherField() {
    this.teacherControls.push(this.createTeacher()); // Add a new teacher field to the FormArray
  }

  removeTeacherField(index: number) {
    this.teacherControls.removeAt(index); // Remove a teacher field from the FormArray
  }
  addNewTeacher(){
    console.log("value ", this.teacherForm.value)
  }
}
