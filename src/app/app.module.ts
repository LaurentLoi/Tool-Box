import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalMessagesModule} from './modules/modal-messages/modal-messages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
