import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  private users : { id : number , name : string } [] = [];

  constructor( private userService : UsersService)
  {
    
  }

  ngOnInit()
  {
    this.users = this.userService.getUsers();
  }
}
