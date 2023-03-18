import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceManagementPage } from './finance-management.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceManagementPageRoutingModule {}
