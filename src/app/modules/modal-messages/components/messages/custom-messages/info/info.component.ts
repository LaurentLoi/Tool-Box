import { Component, OnInit } from '@angular/core';
import {BaseMessage} from '../../base-message';
import {MessageService} from '../../../../services/message.service';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent extends BaseMessage implements OnInit {


  constructor(messageService: MessageService, modalService: ModalService) {
    super(messageService, modalService);
  }

  ngOnInit(): void {
  }

}
