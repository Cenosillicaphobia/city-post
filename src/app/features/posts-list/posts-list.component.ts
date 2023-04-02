import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor ( private dataService: DataService){}

  posts:any
  postComment:any = '';
  pageIndex:number = 1
  searchValue:any;

  ngOnInit():void {
    this.getPostData()
  }

  getPostData(){
    this.dataService.getPosts(this.pageIndex, 24)
    .subscribe( data => { this.posts = data})
  }

  getComments(id:any){
    this.dataService.getPostComments(id)
    .subscribe( data => {
      if( data != ''){ this.postComment = data}
      else {  this.postComment = [{post_id: id, name: 'No comments yet'}]}
    })
  }

  Search(searchValue:any){
    this.dataService.getPosts(this.pageIndex, 24)
    .subscribe(data => { 
      this.posts = data, 
      this.posts = this.posts.filter((response:any) => {
      return response.title.toLowerCase().match( searchValue.toLowerCase());
      }); 
    });
  }

}
