import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../modules/modal-messages/services/message.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  openInfoModal(): void  {
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
