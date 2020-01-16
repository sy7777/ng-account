import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountingComponent} from './views/accounting/accounting.component';
import { StatisticsComponent } from './views/statistics/statistics.component';

const routes: Routes = [
  { path: "accounting", component: AccountingComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "", redirectTo:"accounting", pathMatch:"full"},
  { path: "**", redirectTo: "accounting", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
