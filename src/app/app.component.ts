import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './shared/post.model';
import { PostService } from './shared/post.service';
import { posts } from './shared/posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend-challenge';

  posts : Post[] = posts;
  filteredPosts: Post[];
  localStoragePosts: Post[] = [];
  sub : Subscription = new Subscription();
  subFilter : Subscription = new Subscription();
  
  constructor(private postService : PostService){}

  ngOnInit(){
    this.filteredPosts = this.getSortedArray(posts);
    this.postService.retrievePostFromLocalStorage();
    this.sub = this.postService.localStoragePost.subscribe((data : Post[]) => {
      this.localStoragePosts = this.getSortedArray(data)
    })
    this.subFilter = this.postService.filterText.subscribe((filterString : string) => {
      let search = new RegExp(filterString , 'i');
      this.filteredPosts = this.getSortedArray(this.posts.filter((item) => search.test(item.userFullName.toLowerCase())))
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.subFilter.unsubscribe();
  }

  getSortedArray(array : Post[]){
    return array.sort((a, b)=>  ( new Date(a.date).getTime() ) - ( new Date(b.date).getTime() ) );
  }
}
