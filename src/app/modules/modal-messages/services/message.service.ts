import {Injectable} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ModalService} from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // tslint:disable-next-line:variable-name
  private readonly _messageTitle$ = new BehaviorSubject<string>(null);
  public readonly messageTitle$ = this._messageTitle$.pipe(
    filter(message => !!message)
  );

  // tslint:disable-next-line:variable-name
  private readonly _messageBody$ = new BehaviorSubject<string>(null);
  public readonly messageBody$ = this._messageBody$.asObservable();

  // tslint:disable-next-line:variable-name
  private readonly _purpose$ = new BehaviorSubject<string>(null);
  public readonly purpose$ = this._purpose$.pipe(
    filter(purpose => !!purpose)
  );

  // tslint:disable-next-line:variable-name
  private readonly _confirm$ = new BehaviorSubject<boolean>(null);
  public readonly confirm$ = this._confirm$.asObservable();

  subscription: Subscription;

  constructor(
    private modalService: ModalService
  ) {
  }

// COMMON
  confirm(answer: boolean): void {
    this._confirm$.next(answer);
  }

  resetConfirm(): void {
    this.resetFields();
    this._confirm$.next(null);
  }

  resetFields(): void {
    this._messageTitle$.next(null);
    this._messageBody$.next(null);
    this._purpose$.next(null);
  }

  // MESSAGES

  newInfoMessage(subject: string): void {
    this._messageTitle$.next(subject + ' is confirmed.');
    this._messageBody$.next(`Your ${subject} has been added.`);
    this._purpose$.next('info');
    this.modalService.open();
  }

  newConfirmationMessage(sub: Subscription, subject: string): void {
    this.subscription = sub;
    this._messageTitle$.next(`Confirmation test about ${subject}`);
    this._messageBody$.next(`Let's play with it`);
    this._purpose$.next('confirm');
    this.modalService.open();
  }

  newSuccessMessage(subject: string): void {
    this._messageTitle$.next(subject + ' is confirmed.');
    this._messageBody$.next(`Your ${subject} has been added.`);
    this._purpose$.next('success');
    this.modalService.open();
  }

  newErrorMessage(subject: string): void {
    this._messageTitle$.next('Problem: ');
    this._messageBody$.next(`There was a problem with ${subject}. Please try again`);
    this._purpose$.next('error');
    this.modalService.open();
  }

}
