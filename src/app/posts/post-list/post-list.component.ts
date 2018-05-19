import { PostService } from './../post.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this);
  }
}
