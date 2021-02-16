import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalMessagesModule} from './modules/modal-messages/modal-messages.module';
import { RootComponent } from './root/root.component';
import {SearchBarModule} from './modules/search-bar/search-bar.module';
import { SearchBarTestComponent } from './root/search-bar-test/search-bar-test.component';
import { ModalMessageTestComponent } from './root/modal-message-test/modal-message-test.component';
import {NavBarModule} from './modules/nav-bar/nav-bar.module';
import { IndexComponent } from './root/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    SearchBarTestComponent,
    ModalMessageTestComponent,
    IndexComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModalMessagesModule,
        SearchBarModule,
        NavBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
