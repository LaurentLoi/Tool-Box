import { Component, OnInit } from '@angular/core';
import {BaseMessage} from '../../base-message';
import {MessageService} from '../../../../services/message.service';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent extends BaseMessage implements OnInit {


  constructor(messageService: MessageService, modalService: ModalService) {
    super(messageService, modalService);
  }

  ngOnInit(): void {
  }

}
