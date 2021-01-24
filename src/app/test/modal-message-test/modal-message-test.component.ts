import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../modules/modal-messages/services/message.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-modal-message-test',
  templateUrl: './modal-message-test.component.html',
  styleUrls: ['./modal-message-test.component.scss']
})
export class ModalMessageTestComponent implements OnInit {

  constructor(
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
  }

  openInfoModal(): void {
    this.messageService.newInfoMessage('INFORMATION MODAL');
  }

  async openConfirmModal(): Promise<void> {
    const sub: Subscription = this.messageService.confirm$.subscribe(answer => {
      console.log(answer);
    });
    await this.messageService.newConfirmationMessage(sub, 'CONFIRMATION MODAL');
  }

  openSuccessModal(): void {
    this.messageService.newSuccessMessage('SUCCESS MODAL');
  }

  openErrorModal(): void {
    this.messageService.newErrorMessage('ERROR MODAL');
  }

}
