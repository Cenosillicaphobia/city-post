import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  constructor ( private dataService: DataService, private http: HttpClient ) {}

  users:any
  pageIndex:number = 1
  searchValue:any

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(){
    this.dataService.getUsers(this.pageIndex, 24)
    .subscribe(data => { this.users = data });
  }

  Search(searchValue:any){
    this.dataService.getUsers(this.pageIndex, 100)
    .subscribe(data => { 
      this.users = data, 
      this.users = this.users.filter((response:any) => {
      return response.name.toLowerCase().match( searchValue.toLowerCase());
      }); 
    });
  }

}