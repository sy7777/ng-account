import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountingComponent} from './views/accounting/accounting.component';
import { StatisticsComponent } from './views/statistics/statistics.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { CountMonthComponent } from './components/count-month/count-month.component';
import { CountYearComponent } from './components/count-year/count-year.component';
const routes: Routes = [
  { path: "accounting", component: AccountingComponent,
    
},
  
  { path: "statistics", component: StatisticsComponent },
  { path: "", redirectTo:"accounting", pathMatch:"full"},
  { path: "**", redirectTo: "accounting", pathMatch: "full" },
  // { path: "#", component: AccountingComponent, pathMatch: "full" },
//   { path: "count", component: CountMonthComponent, children:[
//     {path:"year", component: CountYearComponent}
//   ] },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
