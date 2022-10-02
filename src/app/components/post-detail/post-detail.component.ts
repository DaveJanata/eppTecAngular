import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Post';
import { Comment } from '../../Comment';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { CommentService } from 'src/app/services/comment.service';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  comment: Comment;
  comments: Array<Comment>;
  postId: number;
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private service: PostService, private userService: UserService, private commentService: CommentService) {
    this.post = {};
    this.postId = 0;
    this.comments = [];
    this.comment = {};
    }

  ngOnInit(): void {
    this.postId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.service.getPosts().subscribe(posts => this.post = posts.find(x => x.id === this.postId)!);
    this.userService.getUsers().subscribe(users => this.post.userName = users.find(x => x.id === this.post.userId)?.name );
    this.commentService.getComments().subscribe(comment => this.comments = comment.filter(comment => comment.postId === this.postId));
  }
  }  


