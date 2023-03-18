import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksManagementPageRoutingModule } from './tasks-management-routing.module';

import { TasksManagementPage } from './tasks-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksManagementPageRoutingModule
  ],
  declarations: [TasksManagementPage]
})
export class TasksManagementPageModule {}
