import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  if(typeof(window) !== undefined){
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

       if (!isLoggedIn) {
    router.navigate(['/userlogin']);
    return false;
  }
  }
  return true;

 
};
