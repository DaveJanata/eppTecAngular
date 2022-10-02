import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../User';
import { Post } from '../../Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() user: User;

  constructor() { 
    this.post = {};
    this.user = {};
  }

  ngOnInit(): void {
  }

}
