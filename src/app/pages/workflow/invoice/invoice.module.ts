import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {Ng2PaginationModule} from 'ng2-pagination';
import {DialogModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvoiceRoutingModule} from './invoice-routing.module';
import {InvoiceAllComponent} from './invoice-all/invoice-all.component';
import {InvoiceCreateComponent} from './invoice-create/invoice-create.component';
import {InvoiceService} from './invoice.service';
import {InvoiceRecentComponent} from './invoice-recent/invoice-recent.component';
import {ProductService} from '../product/product.service';
import {AreaService} from '../area/area.service';
import {InvoiceEditComponent} from './invoice-edit/invoice-edit.component';
import {InvoiceHtmlComponent} from './invoice-html/invoice-html.component';
import {CustomerService} from '../customer/customer.service';


@NgModule({
  imports: [
    CommonModule,
    Ng2PaginationModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InvoiceRoutingModule,
  ],
  declarations: [
    InvoiceAllComponent,
    InvoiceCreateComponent,
    InvoiceRecentComponent,
    InvoiceEditComponent,
    InvoiceHtmlComponent
  ],
  exports: [],
  providers: [
    InvoiceService,
    ProductService,
    AreaService,
    CustomerService
  ]
})
export class InvoiceModule {
}

