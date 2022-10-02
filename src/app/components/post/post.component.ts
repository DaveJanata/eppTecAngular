import { Component, OnInit } from '@angular/core';
import { Post } from '../../Post';
import { User } from '../../User';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];  
  users: User[] = []; 

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
    this.postService.getUsers().subscribe(users => this.users = users);
  }

}
