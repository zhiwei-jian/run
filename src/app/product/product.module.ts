import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutes} from './product-routing.module';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component'


@NgModule({
  declarations: [ProductComponent, ProductAlertsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutes
  ]
})
export class ProductModule { }
