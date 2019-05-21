import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { BillComponent } from './components/bill/bill.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { ResultComponent } from './components/result/result.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BillComponent,
    ResultComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
