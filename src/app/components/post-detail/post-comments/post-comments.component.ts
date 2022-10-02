import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/Comment';
import { Post } from 'src/app/Post';


@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  @Input() comment: Comment;
  @Input() comments: Array<Comment>;
  @Input() post: Post;

  constructor() {
    this.comment = {};
    this.comments = [];
    this.post = {};
  }



  ngOnInit(): void {
  }

}
