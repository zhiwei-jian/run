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
        path: 'details',
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
  //     {
  //       path: 'approvals',
  //       loadChildren: () => import('./access-request/approvals/approvals.module').then((m) => m.ApprovalsModule),
  //     },
  //     {
  //       path: 'audit-log',
  //       loadChildren: () => import('./access-request/audit-log/audit-log.module').then((m) => m.AuditLogModule),
  //     },
  //     {
  //       path: 'access-list',
  //       loadChildren: () => import('./access-request/access-list/access-list.module').then((m) => m.AccessListModule),
  //     },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
