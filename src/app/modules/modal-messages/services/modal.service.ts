import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

type OpenOrClose = 'open' | 'close';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private display: BehaviorSubject<OpenOrClose> = new BehaviorSubject('close');

  constructor() {
  }

  watch(): Observable<OpenOrClose> {
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
