import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../User';
import { Post } from '../../Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() user: User;
  @Input() post: Post;

  constructor() { 
    this.post = {};
    this.user = {};
  }

  ngOnInit(): void {
  }

}
