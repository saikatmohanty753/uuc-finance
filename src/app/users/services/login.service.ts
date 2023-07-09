import { Injectable } from '@angular/core';
import { LoginInterface } from '../interfaces/UserInterface';
import { ConfigService } from 'src/app/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseUrl:ConfigService,private http:HttpClient) { }
  loginApi = (data:LoginInterface) => {
    this.http.post(this.baseUrl.getBaseUrl()+'mobile-login',data).subscribe((res:any)=>{
      console.log(res);

    });
  }
}
