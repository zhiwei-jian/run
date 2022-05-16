import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'home', component: OverviewComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
  //     {
  //       path: 'create-request',
  //       loadChildren: () =>
  //         import('./access-request/new-request/create-request/create-request.module').then(
  //           (m) => m.CreateRequestModule
  //         ),
  //     },
  //     {
  //       path: 'create-request/:portal',
  //       loadChildren: () =>
  //         import('./access-request/new-request/create-request/create-request.module').then(
  //           (m) => m.CreateRequestModule
  //         ),
  //     },
    ],
  },
  {
    path: 'product',
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
