import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-demo-modal-message',
  templateUrl: './demo-modal-message.component.html',
  styleUrls: ['./demo-modal-message.component.scss']
})
export class DemoModalMessageComponent implements OnInit {

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
      if (answer === true) {
        alert('Confirmed !');
      } else if (answer === false){
        alert('Canceled !');
      }
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
