import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post-model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  
  constructor() { }

  ngOnInit(): void {
  }

  //Incrémentation du compteur "loversIt" du post
  onLikeIt(): void {
      this.post.loveIts++;
  }

  // Décrémentation du compteur "loversIt" du post
  onDislikeIt(): void {
      this.post.loveIts--;
  }


}
