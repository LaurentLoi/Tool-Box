import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';

import { InfoComponent } from './components/messages/custom-messages/info/info.component';
import { ErrorComponent } from './components/messages/custom-messages/error/error.component';
import { SuccessComponent } from './components/messages/custom-messages/success/success.component';
import { ConfirmComponent } from './components/messages/custom-messages/confirm/confirm.component';



@NgModule({
  declarations: [ModalComponent, InfoComponent, ErrorComponent, SuccessComponent, ConfirmComponent],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModalMessagesModule { }
