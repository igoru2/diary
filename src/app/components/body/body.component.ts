import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  isInputValid: boolean = true;
  isButtonValid: boolean = true;

  constructor() {

    setTimeout(() => {

      this.isInputValid = false;
      this.isButtonValid = false;
  
    }, 15000);

  }

  myInput: string = '';

  notes: string[] = [];

  saveMe(): void {
  
    this.notes.push(this.myInput);  
    this.myInput = '';

  }

}
