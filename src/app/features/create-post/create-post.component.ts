import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor ( private logService: LogService, private dataService: DataService, private router: Router){}

  error:any = null;

  post: any = {
    user_id: '',
    title: '',
    body: ''
  }

  createPost(formValue: NgForm){
    this.post.title = formValue.value.title
    this.post.body = formValue.value.body
    this.dataService.createPost( formValue.value.id, this.post).subscribe( (response) =>{ alert('Your post has been generated!'), this.router.navigate(['posts-list'])},
    (error) => { this.error = error.error[0].field + ' ' + error.error[0].message });
  }

}
