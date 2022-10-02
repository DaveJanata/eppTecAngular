import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { User } from '../User';
import { Comment } from '../Comment';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor( private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
