import { Component } from '@angular/core';
import { INote } from 'src/app/models/note.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  notes: INote[] = [];

  constructor(private sharedService: SharedService) {

    this.sharedService.sharedNotes$.subscribe((data) => {
      this.notes = data;

  });

}

}
