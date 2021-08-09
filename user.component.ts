import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: User

  constructor(_firstname: string, _lastname: string, _age: number, _street: string, _city: string, _state: string) {
    this.user = {
      firstname: _firstname,
      lastname: _lastname,
      age: _age,
      address: {
        street: _street,
        city: _city,
        state: _state
      }
    }
  }
}

