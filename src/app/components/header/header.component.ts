import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private sharedService: SharedService) {};
  
  message: string = "Welcome to My Diary!";

  numberOfNotes: number = 1;
  
  ngOnInit() {

    setInterval(() => {
      
      this.numberOfNotes = this.sharedService.sharedData;  

    }, 5);
  
  }

}
