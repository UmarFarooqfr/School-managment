import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, EMPTY, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class commonService {

  readonly _userName = new BehaviorSubject<any>(null);
  readonly userName$ = this._userName.asObservable();

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {

  }


  login(userData: object) {
    return this.http.post('http://localhost:3000/login', userData).pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.message || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));

  }
  registerUser(registrUser: object) {
    return this.http.post('http://localhost:3000/newUser', registrUser).pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.error || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  addNewStudent(studentData: any) {
    console.log("check one")
    return this.http.post('http://localhost:3000/addStudent', studentData).pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.message || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));
  }
  getAllStudents() {
    return this.http.get('http://localhost:3000/getAllStudents').pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.message || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));
  }
  deleteStudent(id:any){
  return this.http.delete(`http://localhost:3000/deleteStudent/${id}`).pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.message || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));
  }
  getStudentById(id:any){
    return this.http.get(`http://localhost:3000/getStudent/${id}`).pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.message || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));
  }
  updateStudentById(data:any){
    return this.http.put(`http://localhost:3000/updateStudent`,data).pipe(catchError(err => {
      console.log("error", err)
      const message = err.error?.message || 'An error has occured.';
      console.log('message: ', message);
      this.toastr.error(message);
      return EMPTY;
    }));
  }
}
