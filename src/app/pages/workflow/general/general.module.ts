import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './general-routing.module';
//own components
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
// modules
import { HomeModule } from '../home/home.module';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { CustomerModule } from '../customer/customer.module';
import { ProductModule } from '../product/product.module';
import { AreaModule } from '../area/area.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { SettingsModule } from '../settings/settings.module';
import { ReportModule } from '../report/report.module';
import { Pages } from '../../pages.component';
import { AccountsPayableComponent } from '../../accounts-payable/accounts-payable.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    routing,
    FileUploadModule,
    CustomerModule,
    ProductModule,
    AreaModule,
    InvoiceModule,
    SettingsModule,
    ReportModule,
  ],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,

  ],
  exports: [
    DashboardComponent,
    RouterModule,
  ],
  providers: [],
})
export class GeneralModule {
}
