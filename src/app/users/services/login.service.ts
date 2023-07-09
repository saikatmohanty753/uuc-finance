import { Injectable } from '@angular/core';
import { LoginInterface } from '../interfaces/UserInterface';
import { ConfigService } from 'src/app/config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseUrl:ConfigService,private http:HttpClient,private router:Router) { }
  protected isAuth:boolean = false;
  loginApi = (data:LoginInterface) => {
    let errors = '';
    this.http.post(this.baseUrl.getBaseUrl()+'mobile-login',data).subscribe((res:any)=>{
      if(res.status == 1)
      {
        sessionStorage.setItem('remember_token',res.result);
        this.router.navigate(['dashboard']);
      }else{
        errors = 'Invalid user name or password';
      }
    });
    return errors;
  }
  logout = () => {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
