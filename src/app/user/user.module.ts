import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user-routing.module'


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutes
  ]
})
export class UserModule { }
