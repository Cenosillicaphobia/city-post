import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor ( private logService: LogService, private dataService: DataService){}

  isLogged:any;

  error:any = null;

  post: any = {
    user_id: '',
    title: '',
    body: ''
  }

  ngOnInit(){
    this.isLogged = this.logService.checkLog();
  }

  createPost(formValue: NgForm){
    this.post.title = formValue.value.title
    this.post.body = formValue.value.body
    this.dataService.createPost( localStorage.getItem('id'), this.post).subscribe( (response) =>{ alert('Your post has been generated!')},
    (error) => { this.error = error.error.message}
    )
  }

}
