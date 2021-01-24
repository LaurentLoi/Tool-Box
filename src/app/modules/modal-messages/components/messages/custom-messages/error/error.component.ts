import { Component, OnInit } from '@angular/core';
import {BaseMessage} from '../../base-message';
import {MessageService} from '../../../../services/message.service';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends BaseMessage implements OnInit {


  constructor(messageService: MessageService, modalService: ModalService) {
    super(messageService, modalService);
  }

  ngOnInit(): void {
  }

}
