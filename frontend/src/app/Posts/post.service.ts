import { Injectable } from '@angular/core';
import { Post } from './Posts.model';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postarray: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(
     private http: HttpClient,
     private router: Router
     ) { }

  getPosts() {
    
    this.http.get<{ message: string, posts: any }>(`${environment.apiUrl}post`)
      .pipe(map((postData) => {
        return postData.posts.map((post) => {
          return {
            _id: post._id,
            title: post.title,
            description: post.description,
            author: post.author,
            type: post.type,
            pages: post.pages,
            imagePath: post.imagePath,
            createdAt:post.createdAt,
            updatedAt:post.updatedAt
          };
        });
      }))
      .subscribe(TransformedData => {
        this.postarray = TransformedData;
        this.postUpdated.next([...this.postarray]);
      });
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  getSinglePost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      author: string;
      type: string;
      pages: string;
      imagePath: string;
    }>
      (`${environment.apiUrl}post/` + id);
  }

  updatePost(postId: string, title: string, description: string, author: string, type: string, pages: string, image: File | string) {

    let postData: Post | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id', postId);
      postData.append('title', title);
      postData.append('description', description);
      postData.append('author', author);
      postData.append('type', type);
      postData.append('pages', pages);
      postData.append('image', image, title);
    } else {
      postData = {
        _id: postId,
        title,
        description,
        author,
        type,
        pages,
        imagePath: image
      };
    }
    this.http.put(`${environment.apiUrl}post/update/` + postId, postData)    
      .subscribe(response => {
        this.router.navigate(['/list']);
      });
  }

  addPost(title: string, description: string,
          author: string, type: string,
          pages: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('description', description);
    postData.append('author', author);
    postData.append('type', type);
    postData.append('pages', pages);
    postData.append('image', image, title);

    this.http.post<{ message: string, post: Post }>
      (`${environment.apiUrl}post/create`, postData)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.router.navigate(['/admin']);
      });
  }

  deletePost(postId: string) {
    this.http.delete(`${environment.apiUrl}post/` + postId)
      .subscribe(() => {
        const updatedPosts = this.postarray.filter(post => post._id !== postId);
        this.postarray = updatedPosts;
        this.postUpdated.next([...this.postarray]);
        this.router.navigate(['/admin']);
      });
  }

}
