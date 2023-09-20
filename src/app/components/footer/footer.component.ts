import { Component } from '@angular/core';
import { INote } from 'src/app/models/note.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  notes: INote[] = [{ text: 'ddd', id: 2342342 }, { text: 'eeeeee', id: 33 }];

}
