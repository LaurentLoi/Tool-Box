import { Component, OnInit } from '@angular/core';
import {BaseMessage} from '../../base-message';
import {MessageService} from '../../../../services/message.service';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent extends BaseMessage implements OnInit {


  constructor(messageService: MessageService, modalService: ModalService) {
    super(messageService, modalService);
  }

  ngOnInit(): void {
  }

}
