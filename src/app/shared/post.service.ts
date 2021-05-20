import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from './post.model';
import { LocalStorageService } from './localStorage.service'
export const LOCAL_STORAGE_KEY = 'my-local-posts'
import { posts } from '../shared/posts'

@Injectable({
  providedIn: 'root',
})
export class PostService {

    _localStoragePosts : Post[] = [];
    localStoragePost : BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
    filterText : Subject<string> = new Subject<string>();

    constructor(private localStorage: LocalStorageService) { }

    addPost(post : Post){
        this._localStoragePosts.push(post);
        this.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this._localStoragePosts))
        this.localStoragePost.next(this._localStoragePosts)
    }

    getPosts(): Post[]{
        return this._localStoragePosts;
    }

    deleteAll(){
        this.localStorage.clear();
        this._localStoragePosts = [];
        this.localStoragePost.next(this._localStoragePosts)
    }

    retrievePostFromLocalStorage(){
        this._localStoragePosts = JSON.parse(this.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        this.localStoragePost.next(this._localStoragePosts);
    }

    setFilter(filter: string){
       this.filterText.next(filter);
    }

}