import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsers: Array<Users> = new Array<Users>();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.listUsers = response;
      }
    });
  }
}
