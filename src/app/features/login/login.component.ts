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

  token: string = '';

  setToken(token = this.token){
    localStorage.setItem('token', token)
  }

  login( form:NgForm){
    localStorage.setItem('id', form.value.id),
    alert('Welcome back! now you can create posts and delete users.'),
    this.router.navigate(['']);
  };

}
