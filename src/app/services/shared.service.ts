import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private sharedData: number = 1;

  sharedData$: Subject<number> = new Subject<number>(); 


  promeni(): void {
    this.sharedData = 0;
    this.sharedData$.next(this.sharedData);
  }


}
