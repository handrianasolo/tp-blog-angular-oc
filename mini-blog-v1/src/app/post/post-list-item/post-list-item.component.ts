import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit(): void {
  }


  //Incrémentation du compteur "loversIt" du post
  onLikeIt(): void {
      this.loveIts++;
  }

  // Décrémentation du compteur "loversIt" du post
  onDislikeIt(): void {
      this.loveIts--;
  }


}
