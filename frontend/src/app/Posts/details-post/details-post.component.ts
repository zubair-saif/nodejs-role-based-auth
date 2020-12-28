import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscribable, Subscription } from 'rxjs';
import {Post } from '../Posts.model';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {

  Post: Post;
  userIsAuthenticated = false;
  userisAdmin: boolean;
  private authListenerSubs: Subscription;
  private adminListenerSubs: Subscription;

  constructor(
    public postService: PostService, 
    public authService: AuthService, 
    public router: Router, 
    public route: ActivatedRoute
    ) { }
  
  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userisAdmin = this.authService.getAdmin();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });

    this.adminListenerSubs = this.authService.getAdminListener().subscribe(isAdmin => {
      this.userisAdmin = isAdmin;
    });

    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getSinglePost(params['ID']);
      })
    ).subscribe((newPost: Post) => {
      this.Post = {
        _id: newPost._id,
        title: newPost.title,
        description: newPost.description,
        author: newPost.author,
        type: newPost.type,
        pages: newPost.pages,
        imagePath: newPost.imagePath
      };
    });
  }

  onDelete(id: string) {
    this.postService.deletePost(id);
  }

}
