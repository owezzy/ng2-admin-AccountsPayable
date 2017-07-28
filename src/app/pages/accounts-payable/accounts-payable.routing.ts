/**
 * Created by owen_adira on 5/30/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { AccountsPayableComponent } from './accounts-payable.component';
import { ProductAllComponent } from '../workflow/product/product-all/product-all.component';
import { AuthGuard } from '../../../shared/services/auth.guard';

const routes: Routes = [
  { path: '',
    component: AccountsPayableComponent,
    canActivate: [AuthGuard],

  },
];
export const routing = RouterModule.forChild(routes);
