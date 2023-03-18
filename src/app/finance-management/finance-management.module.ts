import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceManagementPageRoutingModule } from './finance-management-routing.module';

import { FinanceManagementPage } from './finance-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceManagementPageRoutingModule
  ],
  declarations: [FinanceManagementPage]
})
export class FinanceManagementPageModule {}
