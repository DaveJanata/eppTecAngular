import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../posts';
import { Post } from '../../Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = POSTS;  
  title: string = 'title placeholder';
  authorName: string = 'authorName placeholder';
  body: string = 'body placeholder';


  constructor() { }

  ngOnInit(): void {
  }

}
