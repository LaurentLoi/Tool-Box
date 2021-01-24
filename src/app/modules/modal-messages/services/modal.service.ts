import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject('close');

  constructor() {
  }

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(): void {
    this.display.next('open');
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.display.next('close');
    document.body.style.overflow = 'visible';
  }
}
