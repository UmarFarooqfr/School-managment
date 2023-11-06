import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice_node.js';
  constructor(private http:HttpClient){
    const data = {
      userName:'umar farooq',
      email:'umarfarooq@gmail.com',
      password:'Umarfarooq@4985',
    }

    // this.http.post('http://localhost:3000/newUser',data).subscribe((data123:any)=>{
    //   console.log('data123: ', data123);
  
    // })
   }
}
