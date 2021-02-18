import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root/root.component';
import {DemoModalMessageComponent} from './modules/modal-messages/demo-modal-message/demo-modal-message.component';
import {DemoSearchBarComponent} from './modules/search-bar/demo-search-bar/demo-search-bar.component';
import {IndexComponent} from './root/index/index.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'modal',
        component: DemoModalMessageComponent
      },
      {
        path: 'search',
        component: DemoSearchBarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
