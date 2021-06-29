import { Component, OnInit } from '@angular/core';
import { name, datatype } from 'faker';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<Users> = [];
  flag = true;
  constructor() {}

  ngOnInit(): void {
    this.users = [...Array(10)].map(() => ({
      firstName: name.firstName(),
      age: datatype.number(),
    }));
  }
}

export class Users {
  firstName: string;
  age: number;
}
