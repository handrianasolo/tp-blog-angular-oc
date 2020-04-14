import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // tableau de posts
  posts = [
    {
      title: 'Mon premier post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',  
      loveIts: 4,  
      created_at: new Date()
    },

    {
      title: 'Mon deuxième post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',  
      loveIts: -4,  
      created_at: new Date()
    },

    {
      title: 'Mon nouveau post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',  
      loveIts: 0,  
      created_at: new Date()
    },
  ];

  constructor(){}
}

  
