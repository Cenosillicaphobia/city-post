import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{

  constructor ( private logService: LogService, private dataService: DataService){}

  isLogged:any;

  error:any = null;

  ngOnInit(){
    this.isLogged = this.logService.checkLog();
  }

  deleteUser(form:NgForm){
    console.log(form.value.id),
    this.dataService.deleteUser(form.value.id).subscribe( response => { alert ('User Deleted')},
    (error) => { this.error = error.error.message });
  }

}
