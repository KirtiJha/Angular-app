import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users =[
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'email1@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John1',
        lastName: 'Doe1',
        email: 'email2@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'John2',
        lastName: 'Doe2',
        email: 'email3@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 18:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
