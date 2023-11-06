import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './demo-material-module';
import { HomeComponent } from './home/home.component';
import { NewStudentsComponent } from './new-students/new-students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SchoolActivitiesComponent } from './school-activities/school-activities.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpCompComponent } from './help-comp/help-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserLoginComponent,
    DashboardComponent,
    HomeComponent,
    NewStudentsComponent,
    TeachersComponent,
    SchoolActivitiesComponent,
    AboutUsComponent,
    HelpCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
