import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { AuthService } from '../shared/services/auth.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthGuard } from '../shared/services/auth.guard';
import {WorkflowComponent} from "./pages/workflow/workflow.component";

export interface AppConfig {
  BASE_URL: string;
  APP_ID: string;
  APP_SECRET: string;
}

export const APPCONFIG: AppConfig = {
  BASE_URL: 'https://adminapp-834129-api.selfbits.io',
  APP_ID: '074a4c175410fa390311203b40627cb1',
  APP_SECRET: '2fd51451f5b28e0ac66091d944a457de',

};
// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
  AuthService,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */


@NgModule({
  bootstrap: [App, ],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,


  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    //ENV_PROVIDERS,
    AuthService,
    AuthGuard,
    { provide: 'APP_CONFIG_TOKEN', useValue: APPCONFIG },
  ],
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
