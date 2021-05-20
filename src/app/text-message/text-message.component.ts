import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.scss']
})
export class TextMessageComponent implements OnInit {

  @Input() post: Post;
  @Input() isOther: boolean = true;
  isChecked : boolean = false;
  
  constructor() { }
 
  ngOnInit(): void {
    const ps = document.querySelectorAll('p');
    const observer = new (window as any).ResizeObserver(entries => {
    for (let entry of entries) {
      entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
    }
});

  ps.forEach(p => {
    observer.observe(p);
  });
  }

  onCheck(){
    this.isChecked =!this.isChecked
  }


}
