import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { User } from '../User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor( private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

}
