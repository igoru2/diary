import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input() id: number = 0;
  @Input() text: string = '';
  @Input() done: boolean = false;

}
