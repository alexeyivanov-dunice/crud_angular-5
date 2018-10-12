import { Component, OnInit } from '@angular/core';

import { PostService } from './post/post.service';
import { Post } from './post/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[] = [];
  onEditMode = false;
  currentId = 0;
  oldPost: Post;
  constructor(private postService: PostService ) {}


  public ngOnInit() {
    this.getPosts();
  }

  public add(title: string, body: string): void {
    title = title.trim();
    body = body.trim();
    if (!title || !body) { return; }
    this.postService
      .addPost({ title, body } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }

  private getPosts(): void {
    this.postService
      .getPosts()
      .subscribe((posts: any) => {
        this.posts = posts;
      });
  }

  public deletePost(id: string): void {
    this.postService
      .deletePost(id)
      .subscribe(() => { this.getPosts(); });
  }

  public modeEditProfile(currentId: number, post: Post, field: string, mode: number ) {
    if (this.onEditMode) {
      switch (mode) {
        case 1: post = this.oldPost;
          break;
        case 2: post = this.oldPost;
          break;
      }
      this.postService.updatePost(post);
      this.oldPost = null;
    }
    this.onEditMode = !this.onEditMode;
    this.currentId  = this.onEditMode ? currentId : 0;
    this.oldPost = post;
  }

}



