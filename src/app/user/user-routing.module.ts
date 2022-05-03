/*!
 * Copyright © 2016-2021 Dell Inc. or its subsidiaries.
 * All Rights Reserved.
 */
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent }];

export const UserRoutes = RouterModule.forChild(routes);
