import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [{ path: '', component: ProductComponent }];

export const ProductRoutes = RouterModule.forChild(routes);
