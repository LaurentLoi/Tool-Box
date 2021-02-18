import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalMessagesModule} from './modules/modal-messages/modal-messages.module';
import { RootComponent } from './root/root.component';
import {SearchBarModule} from './modules/search-bar/search-bar.module';
import { DemoSearchBarComponent } from './modules/search-bar/demo-search-bar/demo-search-bar.component';
import { DemoModalMessageComponent } from './modules/modal-messages/demo-modal-message/demo-modal-message.component';
import {NavBarModule} from './modules/nav-bar/nav-bar.module';
import { IndexComponent } from './root/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    DemoSearchBarComponent,
    DemoModalMessageComponent,
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
