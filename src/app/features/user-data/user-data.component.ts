import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor ( private route: ActivatedRoute, private dataService: DataService ){}

  userData: any = '';
  userTodos:any = '';
  userPosts:any = '';
  postComment:any = '';

  ngOnInit(): void {
    
    let userId = this.route.snapshot.paramMap.get('id')

    this.dataService.getUserData(userId)
    .subscribe( data => { this.userData = data })

    this.dataService.getUserTodos(userId)
    .subscribe( data => { this.userTodos = data })

    this.dataService.getUserPosts(userId)
    .subscribe( data => { this.userPosts = data })

  }

  getComments(id:any){
    this.dataService.getPostComments(id)
    .subscribe( data => {
      if( data != ''){ this.postComment = data}
      else {  this.postComment = [{post_id: id, name: 'No comments yet'}]}
    })
  }

}
