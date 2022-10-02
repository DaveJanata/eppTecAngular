import { Component, OnInit } from '@angular/core';
import { Post } from '../../Post';
import { User } from '../../User';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];  
  users: User[] = []; 

  constructor(private postService: PostService, private userService: UserService) { }


  // Tenhle kus kódu rozhodně není best-practice. A trvá to dlouho, rozhodně to není O(1). :) Musím zlepšit.
  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
    this.userService.getUsers().subscribe(users => this.posts.forEach(post => {
      post.userName = users[post.userId!].name;
    }));

    for (let i = 1; i < this.posts.length; i++){
      let postUserId = this.posts[i].userId!;
      this.posts[i].userName = this.users[postUserId].name 
      if (this.posts[i].body!.length > 20){
        this.posts[i].body = this.posts[i].body?.slice(0,21); 
      }
    }
  }

}
