import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor ( private router: Router){}

  login( form:NgForm){
    localStorage.setItem('token', form.value.token)
    this.router.navigate(['users-list'])
  };

}
