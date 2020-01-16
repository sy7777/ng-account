import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountMonthComponent } from './components/count-month/count-month.component';
import { CountYearComponent } from './components/count-year/count-year.component';
import { CountComponent } from './components/count/count.component';

import { MenuComponent } from './components/menu/menu.component';
import { AccountingComponent } from './views/accounting/accounting.component';

import { StatisticsComponent } from './views/statistics/statistics.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CountMonthComponent,
    CountYearComponent,
    CountComponent,

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
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
