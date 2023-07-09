import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let routeUser = new Router;
  if(sessionStorage.getItem("remember_token"))
  {
    return true;
  }else{
    routeUser.navigate([""]);
    return false;
  }
};
