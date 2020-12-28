import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../Posts.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSub: Subscription;
  title: string;
  
  constructor(
    public postService: PostService
    ) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener()
      .subscribe((post: Post[]) => {
        this.posts = post;
      });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  onDelete(id: string) {
    this.postService.deletePost(id);
  }

  Search() {
    if (this.title !== '') {
      this.posts = this.posts.filter(res => {
        return res.title.toLocaleLowerCase()
        .match(
          this.title.toLocaleLowerCase()
          );
      });
    } else if (this.title === '') {
      this.ngOnInit();
    }
  }

}
