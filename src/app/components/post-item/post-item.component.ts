import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../User';
import { Post } from '../../Post';
import { Comment } from '../../Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() user: User;
  @Input() post: Post;

  postId: Number;
  comments: Array<Comment>;

  constructor(private commentService: CommentService) { 
    this.post = {};
    this.user = {};
    this.comments = [];
    this.postId = 0;
  }

  ngOnInit(): void {
    this.postId = this.post.id!;
    this.commentService.getComments().subscribe(comment => this.comments = comment.filter(comment => comment.postId === this.postId));
  }

}
