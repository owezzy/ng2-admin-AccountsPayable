/**
 * Created by owen_adira on 5/30/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './accounts-payable.routing';
import { AccountsPayableComponent } from './accounts-payable.component';
import { WorkflowModule } from '../workflow/workflow.module';
import { GeneralModule } from '../workflow/general/general.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    GeneralModule,


  ],
  declarations: [
    AccountsPayableComponent,

  ],
})
export class AccountsPayableModule {}
