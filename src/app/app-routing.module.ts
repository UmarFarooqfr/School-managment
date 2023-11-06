import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {  authGuard } from './auth.guard';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { NewStudentsComponent } from './new-students/new-students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SchoolActivitiesComponent } from './school-activities/school-activities.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpCompComponent } from './help-comp/help-comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' ,pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] ,children: [
    {
      path: 'home',
      component:HomeComponent,
    },
    {
      path: 'newstudents',
      component:NewStudentsComponent,
    },
    {
      path: 'teachers',
      component:TeachersComponent,
    },
    {
      path: 'activities',
      component:SchoolActivitiesComponent,
    },
    {
      path: 'about-us',
      component:AboutUsComponent,
    },
    {
      path: 'help',
      component:HelpCompComponent,
    },
    // {
    //   path: '',
    //   component:AddStudentsComponent,
    //   // pathMatch: 'full'
    // }
  ]},
  
  // { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: NewUserComponent },
  { path: '**', redirectTo: 'login' }
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
