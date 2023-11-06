import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { commonService } from '../service-name.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  sidenavMode: 'side' | 'over' = 'over';
  userInfo: any = {};
  userFirstName: any = ''
  constructor(private commonService: commonService) {
    this.userInfo = (localStorage.getItem('user'));
    if (this.userInfo) {
      this.userInfo = JSON.parse(this.userInfo)
      console.log('this.userInfo: ', this.userInfo);
    }
    const inputString = this.userInfo.userName;
    const words = inputString.split(' ');
    const initials = words.map((word: any) => word.charAt(0));
    this.userFirstName = initials.join('');

    console.log('this.userFirstName: ', this.userFirstName);

  }
  @HostListener('window:resize', ['$event'])

  ngAfterViewInit() {
    this.sidenav?.open()
    this.setSidenavMode(window.innerWidth);
  }
  setSidenavMode(windowWidth: number) {
    this.sidenavMode = windowWidth >= 900 ? 'side' : 'over';
    if (this.sidenav) {

      this.sidenav.mode = this.sidenavMode;
    }
  }
  onResize(event: Event) {
    this.setSidenavMode((event.target as Window).innerWidth);
  }
  logOut() {
    this.commonService.logout()
  }
}
