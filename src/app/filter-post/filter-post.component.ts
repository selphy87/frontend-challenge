import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-filter-post',
  templateUrl: './filter-post.component.html',
  styleUrls: ['./filter-post.component.scss']
})
export class FilterPostComponent implements OnInit {

  filter: string;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  filterPosts(data: string){
    this.postService.setFilter(data);
  }

}
