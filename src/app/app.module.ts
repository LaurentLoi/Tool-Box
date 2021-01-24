import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalMessagesModule} from './modules/modal-messages/modal-messages.module';
import { TestComponent } from './test/test.component';
import {SearchBarModule} from './modules/search-bar/search-bar.module';
import { SearchBarTestComponent } from './test/search-bar-test/search-bar-test.component';
import { ModalMessageTestComponent } from './test/modal-message-test/modal-message-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SearchBarTestComponent,
    ModalMessageTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalMessagesModule,
    SearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
