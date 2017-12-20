import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ItemsModule } from './items/items.module';
import { AppComponent } from './app.component';
import { CollectionService } from './core/services/collection/collection.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ItemsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    PageNotFoundModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [CollectionService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
