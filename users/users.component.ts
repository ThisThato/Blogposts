import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor() {
    this.users = [{
      firstname: "",
      lastname: "",
      age: 0,
      address: {
        street: "",
        city: "",
        state: ""
      }
    }];
  }

  ngOnInit() {
    this.users = [
      {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        address: {
          street: "20 Main street",
          city: "Johannesburg",
          state: "Gauteng"
        }
      },
      {
        firstname: "Lethabo",
        lastname: "Maja",
        age: 20,
        address: {
          street: "20 Main street",
          city: "Johannesburg",
          state: "Gauteng"
        }
      },
      {
        firstname: "Chris",
        lastname: "Jenner",
        age: 50,
        address: {
          street: "20 Main street",
          city: "Johannesburg",
          state: "Gauteng"
        }
      },


    ]
  }

}
