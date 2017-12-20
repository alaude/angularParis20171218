import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
  ]
})
export class PageNotFoundModule { }
