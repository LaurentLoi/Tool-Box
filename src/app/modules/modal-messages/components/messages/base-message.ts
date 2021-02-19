import {MessageService} from '../../services/message.service';
import {ModalService} from '../../services/modal.service';

export abstract class BaseMessage {

  messageTitle$ = this.messageService.messageTitle$;
  messageBody$ = this.messageService.messageBody$;
  purpose$ = this.messageService.purpose$;

  protected constructor(
    protected messageService: MessageService,
    private modalService: ModalService
  ) {
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
