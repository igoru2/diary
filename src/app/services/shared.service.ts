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
    this.notes.push({text: data, id: this.id});
    this.sharedNotes$.next(this.notes);
  }

}
