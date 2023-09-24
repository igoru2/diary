import { Component } from '@angular/core';
import { INote } from 'src/app/models/note.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  constructor(private sharedService: SharedService) { };

  isInputValid: boolean = true;
  isButtonValid: boolean = true;   

  myInput: string = '';
  
  er: boolean = false;

  
  saveMe(): void {

    if (!this.myInput) {
      this.er = true;
      return;
    }

    this.er = false;
  
    this.sharedService.addMe(this.myInput);    
    
    this.myInput = '';

  }

  completeMe(): void {

    this.isInputValid = false;
    this.isButtonValid = false;
  
    this.sharedService.promeni();

  }

}
