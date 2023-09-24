import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INote } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private notes: INote[] = [];

  sharedNotes$: Subject<INote[]> = new Subject<INote[]>(); 

  private id: number = 0;

  private sharedData: number = 1;

  sharedData$: Subject<number> = new Subject<number>(); 

  promeni(): void {
    this.sharedData = 0;
    this.sharedData$.next(this.sharedData);
  }

  addMe(data: string) {
    this.id++;
    this.notes.push({text: data, id: this.id, changed: false});
    this.sharedNotes$.next(this.notes);
  }

  changeMeShared (id: number, newText: string) {

    this.notes = this.notes.map((el) => {

      if (el.id === id) {
        el.text = newText;
        el.changed = true;
      }

      return el;

    });

    this.sharedNotes$.next(this.notes);
  };

  deleteNote(id: number) {

    this.notes = this.notes.filter((el) => {
      return el.id !== id;
    });

    this.sharedNotes$.next(this.notes);
  }

}
