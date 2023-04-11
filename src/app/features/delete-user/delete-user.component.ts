import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  constructor ( private logService: LogService, private dataService: DataService, private router: Router){}

  error:any = null;

  deleteUser(form:NgForm){
    this.dataService.deleteUser(form.value.id).subscribe( response => { alert ('User Deleted'), this.router.navigate(['/users-list'])},
    (error) => { this.error = error.error.message });
  }

}
