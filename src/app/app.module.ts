import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountMonthComponent } from './components/count-month/count-month.component';
import { CountYearComponent } from './components/count-year/count-year.component';

import { MenuComponent } from './components/menu/menu.component';
import { AccountingComponent } from './views/accounting/accounting.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { HeaderComponent } from './components/header/header.component';
/** 配置 ng-zorro-antd-mobile 国际化 **/
import { LOCAL_PROVIDER_TOKEN, en_US } from 'ng-zorro-antd-mobile';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { Router, RouterModule } from '@angular/router';
// import { NgxEchartsModule } from 'echarts';
// import {ChartsModule} from 'angular-bootstrap-md';




@NgModule({
  declarations: [
    AppComponent,
    CountMonthComponent,
    CountYearComponent,
    
    MenuComponent,
    AccountingComponent,
    StatisticsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,
    // NgxEchartsModule
  

  ],
  providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: en_US } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
