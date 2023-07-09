import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginSubmit') myForm!: NgForm;
  private err:string = '';
  constructor (private login:LoginService) {}
  onsubmit = () => {
    let data = this.myForm.value;
    let response = this.login.loginApi(data)
    this.myForm.resetForm()
  }
  errors = this.err
}
