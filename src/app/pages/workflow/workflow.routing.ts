import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Pages } from '../pages.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  ];


export const routing = RouterModule.forChild(routes)
