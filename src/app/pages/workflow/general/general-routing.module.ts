import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// components
import { HomeBodyComponent } from '../home/home-body/home-body.component';
import { ExcelFileUploaderComponent } from '../file-upload/excel-file-uploader/excel-file-uploader.component';
import { CustomerAllComponent } from '../customer/customer-all/customer-all.component';
import { CustomerDetailComponent } from '../customer/customer-detail/customer-detail.component';
import { ProductCreateComponent } from '../product/product-create/product-create.component';
import { CustomerCreateComponent } from '../customer/customer-create/customer-create.component';
import { AreaCreateComponent } from '../area/area-create/area-create.component';
import { InvoiceAllComponent } from '../invoice/invoice-all/invoice-all.component';
import { InvoiceRecentComponent } from '../invoice/invoice-recent/invoice-recent.component';
import { InvoiceEditComponent } from '../invoice/invoice-edit/invoice-edit.component';
import { InvoiceHtmlComponent } from '../invoice/invoice-html/invoice-html.component';
import { LocationDueReportComponent } from '../report/location-due-report/location-due-report.component';
import { AccountsPayableComponent } from '../../accounts-payable/accounts-payable.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeBodyComponent,
  },
  {
    path: 'upload-file',
    component: ExcelFileUploaderComponent,
  },
  {
    path: 'customer/all',
    component: CustomerAllComponent,
  },
  {
    path: 'customer/detail/:id',
    component: CustomerDetailComponent,
  },
  {
    path: 'customer/create',
    component: CustomerCreateComponent,
  },
  {
    path: 'product',
    component: ProductCreateComponent,
  },
  {
    path: 'area',
    component: AreaCreateComponent,
  },
  {
    path: 'invoice/all',
    component: InvoiceAllComponent,
  },
  {
    path: 'invoice/recent',
    component: InvoiceRecentComponent,
  },
  {
    path: 'invoice/display/:type/:id',
    component: InvoiceHtmlComponent,
  },
  {
    path: 'invoice/view/:type/:id',
    component: InvoiceEditComponent,
  },
  {
    path: 'report',
    component: LocationDueReportComponent,
  },
];

export const routing = RouterModule.forChild(routes);

