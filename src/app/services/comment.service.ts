import { Injectable } from '@angular/core';
import { Comment } from '../Comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  
  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

}
