import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  baseLink = environment.BASE_LINK;

  setHeader(){
    let header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return header
   };

  //users-list
  getUsers(page: number, perPages: number ){
    return this.http.get( this.baseLink + '/users?page=' + page + '&per_page=' + perPages, { headers: this.setHeader()});
  };

  //user-data
  getUserData(id: any){
    return this.http.get( this.baseLink + '/users/' + id, { headers: this.setHeader()});
  };

  getUserTodos(id: any){
    return this.http.get( this.baseLink + '/users/' + id + '/todos', { headers: this.setHeader()});
  }

  getUserPosts(id: any){
    return this.http.get( this.baseLink + '/users/' + id + '/posts', { headers: this.setHeader()});
  }

  getPostComments(id: any){
    return this.http.get( this.baseLink + '/posts/' + id + '/comments', { headers: this.setHeader()});
  }

  //posts-list
  getPosts(page: number, perPages: number ){
    return this.http.get( this.baseLink + '/posts?page=' + page + '&per_page=' + perPages, { headers: this.setHeader()} );
  };

  //Add user
  addUser(user: any){
    return this.http.post( this.baseLink + '/users', user, { observe: 'response', headers: this.setHeader()})
  };

  //Delete user
  deleteUser(userId: any){
    return this.http.delete( this.baseLink + '/users/' + userId, { observe: 'response', headers: this.setHeader()})
  };

  //Create post
  createPost(id:any, post:any){
    return this.http.post( this.baseLink + '/users/' + id + '/posts', post, { observe: 'response', headers: this.setHeader()})
  };
 
}
