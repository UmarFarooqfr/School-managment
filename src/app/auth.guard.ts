import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('state: ', state);
  console.log('route: ', route);
  // const loginService = inject(LoginService);
  const router = inject(Router);
  let value = false;
  const myData = localStorage.getItem('key_Token');
  console.log('myData: ', myData);
  if (myData !== null) {


    value = true;

  }
  if (!value) {
    router.navigate(['/login']);
  }

  return value;
};
