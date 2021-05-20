import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.scss']
})
export class TextMessageComponent implements OnInit {

  @Input() post: Post;
  @Input() isOther: boolean = true;
  
  constructor() { }
 
  ngOnInit(): void {
  }

}
