import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PostService {

  private postUrl = 'api/posts';
  constructor(private http: HttpClient) { }

  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  getPosts (): Observable<any> {
    return this.http.get(this.postUrl);
  }

  deletePost (id: string): Observable<any> {
    return this.http.delete(`${this.postUrl}/${id} `);
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postUrl, post, httpOptions);
  }

}
