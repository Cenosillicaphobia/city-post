import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor( private router: Router ) {}

  isAuthenticated(){
    if( localStorage.getItem('token') != null){ return true}
    else{ return false};
  }

  Logout(){
    localStorage.clear(),
    this.router.navigate([''])
  }

}
