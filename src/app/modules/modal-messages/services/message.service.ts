import {Injectable} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ModalService} from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly messageTitle = new BehaviorSubject<string>(null);
  public readonly messageTitle$ = this.messageTitle.pipe(
    filter(message => !!message)
  );

  private readonly messageBody = new BehaviorSubject<string>(null);
  public readonly messageBody$ = this.messageBody.asObservable();

  private readonly purpose = new BehaviorSubject<string>(null);
  public readonly purpose$ = this.purpose.pipe(
    filter(purpose => !!purpose)
  );

  private readonly confirm = new BehaviorSubject<boolean>(null);
  public readonly confirm$ = this.confirm.pipe(
    filter(answer => answer !== null && answer !== undefined)
  );

  subscription: Subscription;

  constructor(
    private modalService: ModalService
  ) {
  }

// COMMON
  answerConfirm(answer: boolean): void {
    this.confirm.next(answer);
  }

  resetConfirm(): void {
    this.resetFields();
    this.confirm.next(null);
  }

  resetFields(): void {
    this.messageTitle.next(null);
    this.messageBody.next(null);
    this.purpose.next(null);
  }

  // MESSAGES

  newInfoMessage(subject: string): void {
    this.messageTitle.next(subject + ' is confirmed.');
    this.messageBody.next(`Your ${subject} has been added.`);
    this.purpose.next('info');
    this.modalService.open();
  }

  newConfirmationMessage(sub: Subscription, subject: string): void {
    this.subscription = sub;
    this.messageTitle.next(`Confirmation test about ${subject}`);
    this.messageBody.next(`Let's play with it`);
    this.purpose.next('confirm');
    this.modalService.open();
  }

  newSuccessMessage(subject: string): void {
    this.messageTitle.next(subject + ' is confirmed.');
    this.messageBody.next(`Your ${subject} has been added.`);
    this.purpose.next('success');
    this.modalService.open();
  }

  newErrorMessage(subject: string): void {
    this.messageTitle.next('Problem: ');
    this.messageBody.next(`There was a problem with ${subject}. Please try again`);
    this.purpose.next('error');
    this.modalService.open();
  }

}
