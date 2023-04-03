import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  token: string = '';

  user: any  = {
    name: "",
    email: "",
    gender: "",
    status: "active"
  };

  newUser: any;

  error:any = null;
  
  constructor( private dataService: DataService, private router: Router ){}

  setToken(token = this.token){
    localStorage.setItem('token', token)
  }

  register( form: NgForm){
    this.user.name = form.value.name
    this.user.email = form.value.email
    this.user.gender = form.value.gender

    this.dataService.addUser(this.user).subscribe((response) => {
      this.newUser = response.body,
      localStorage.setItem('id', this.newUser.id),
      alert( 'Hello ' + this.newUser.name + ' now you can create post and delete users, save your id: "' + this.newUser.id + '" to login later.'),
      this.router.navigate(['']);
    }, (error) => { this.error = error.error[0].field + ' ' + error.error[0].message });

  };

}
