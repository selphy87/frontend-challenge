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
  // @ViewChild('checkbox') checkbox; 
  isChecked : boolean = false;
  
  constructor() { }
 
  ngOnInit(): void {
    const ps = document.querySelectorAll('p');
    const observer = new (window as any).ResizeObserver(entries => {
      console.log(entries)
    for (let entry of entries) {
      entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
    }
});

  ps.forEach(p => {
    observer.observe(p);
  });
  }

  ngAfterViewInit() {
    // console.log(this.checkbox.nativeElement);
  }

  onCheck(data){
    data.stopPropagation();
    console.log(data)
    this.isChecked =!this.isChecked
    // console.log(this.checkbox.nativeElement)
   // this.checkbox.nativeElement.
  }


}
