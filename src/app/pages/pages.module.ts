import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import {WorkflowModule} from "./workflow/workflow.module";
import { AccountsPayableComponent } from './accounts-payable/accounts-payable.component';
import {ProductModule} from "./workflow/product/product.module";
import {WorkflowComponent} from "./workflow/workflow.component";


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    WorkflowModule,


  ],
  declarations: [
    Pages,



  ],
})
export class PagesModule {
}
