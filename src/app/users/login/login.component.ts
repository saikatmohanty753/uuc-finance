import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginSubmit') myForm!: NgForm;
  onsubmit = () => {
    console.log(this.myForm.value);
    this.myForm.resetForm()
  }
}
