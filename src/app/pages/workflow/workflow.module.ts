import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralModule } from './general/general.module';
import { routing } from './workflow.routing';
import { WorkflowComponent } from './workflow.component';
// services
import { CustomHttpService } from './custom-http.service';
import { AutoCompleteModule, PickListModule, ConfirmDialogModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    //user defines modules
    // GeneralModule,
    AutoCompleteModule, PickListModule, ConfirmDialogModule, SharedModule,
    NgbModule.forRoot(),

  ],
  declarations: [
    WorkflowComponent,

  ],

  providers: [
    CustomHttpService,
  ],
  bootstrap: [],
})

export class WorkflowModule {}

