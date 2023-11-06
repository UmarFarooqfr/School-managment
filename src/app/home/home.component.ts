import { Component } from '@angular/core';
import { commonService } from '../service-name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allStudents: any = []
  constructor(private commonService: commonService,private route:Router) {
    this.commonService.getAllStudents().subscribe((data) => {
      console.log('data: ', data);
      this.allStudents = data

    })
  }
  DeleteStudent(id: string) {
    console.log('id: ', id);
    this.commonService.deleteStudent(id).subscribe((remainData: any) => {
      console.log('remainData: ', remainData);
      this.allStudents.forEach((element: any, i: any) => {
        if (element._id === remainData?._id) {
          this.allStudents.splice(i, 1)
        }

      });

    })
  }
  editStudent(id:string){
    const queryParams = { id: id };

    // Navigate to the target route with the query parameters
    this.route.navigate(['/dashboard/newstudents'], { queryParams: queryParams });
  }

}
