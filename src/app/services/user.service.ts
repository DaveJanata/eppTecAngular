import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  
   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
