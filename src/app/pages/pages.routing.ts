import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../../shared/services/auth.guard';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'accounts-payable', loadChildren: './accounts-payable/accounts-payable.module#AccountsPayableModule' },
      // { path: 'workflow', loadChildren: './workflow/workflow.module#WorkflowModule' },
      // { path: 'customer', loadChildren: './workflow/customer/customer.module#CustomerModule' },
      // { path: 'product', loadChildren: './workflow/general/general-routing.module#GeneralRoutingModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
