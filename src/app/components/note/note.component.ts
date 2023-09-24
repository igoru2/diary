import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  constructor(private sharedService: SharedService) {


      this.sharedService.sharedData$.subscribe((data) => {
        this.isButtonValid = data;
  
      });  

    }

  @Input() id: number = 0;
  @Input() text: string = '';
  @Input() changed: boolean = false;

  err = false;

  closed: boolean = true;

  editMe(): void {
    this.closed = false;    
  };

  finishMe(newValue: string): void {
    if (!newValue) {
      this.err = true;
      return;
    }
    this.err = false;
    this.closed = true;
    this.sharedService.changeMeShared(this.id, newValue);
  };


  isButtonValid: number = 1;

  deleteMe(): void {
    this.sharedService.deleteNote(this.id);
  }

}
