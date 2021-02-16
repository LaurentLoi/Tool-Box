import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../modules/modal-messages/services/message.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
