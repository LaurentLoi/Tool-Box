import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MessageService} from '../../services/message.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  messageTitle$ = this.messageService.messageTitle$;
  messageBody$ = this.messageService.messageBody$;
  purpose$ = this.messageService.purpose$;

  display$: Observable<'open' | 'close'>;

  constructor(
    private messageService: MessageService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }

  close(): void {
    this.modalService.close();
    this.messageService.resetConfirm();
    if (this.messageService.subscription != null) {
      this.messageService.subscription.unsubscribe();
    }
  }

  confirm(answer: boolean): void {
    this.messageService.answerConfirm(answer);
    this.modalService.close();
    this.messageService.resetConfirm();
    if (this.messageService.subscription != null) {
      this.messageService.subscription.unsubscribe();
    }
  }
}
