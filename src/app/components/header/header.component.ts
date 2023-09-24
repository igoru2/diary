import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private sharedService: SharedService) {

    this.sharedService.sharedData$.subscribe((data) => {
      this.changePicture = data;

    });  


  };
  
  message: string = "Welcome to My Diary!";

  changePicture: number = 1;   
  
  }
