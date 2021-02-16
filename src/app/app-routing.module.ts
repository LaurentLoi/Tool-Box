import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root/root.component';
import {ModalMessageTestComponent} from './root/modal-message-test/modal-message-test.component';
import {SearchBarTestComponent} from './root/search-bar-test/search-bar-test.component';
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
        component: ModalMessageTestComponent
      },
      {
        path: 'search',
        component: SearchBarTestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
