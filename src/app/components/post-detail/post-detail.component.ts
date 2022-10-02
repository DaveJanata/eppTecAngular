import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Post';
import { ActivatedRoute } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
  postId: number;
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private service: PostService) {
    this.post = {};
    this.postId = 0;
    }

  ngOnInit(): void {
    this.postId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.service.getPosts().subscribe(posts => this.post = posts.find(x => x.id === this.postId)!);

  }  

}
