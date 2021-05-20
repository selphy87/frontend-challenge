import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postText : string;
  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  publish(){
    let post = new Post("You", new Date(), this.postText, "/assets/img/photo.png")
    this.postService.addPost(post);
    this.postText = '';
  }

  deleteAll(){
    this.postService.deleteAll();
  }

}
