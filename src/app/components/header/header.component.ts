import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  message: string = "Welcome to My Diary!";

  numberOfNotes: number = 0;

  constructor() {

    setTimeout(() => {

      this.numberOfNotes = 15;
  
    }, 15000);
  }

  

}
