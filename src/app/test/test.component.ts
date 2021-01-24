import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../modules/modal-messages/services/message.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
