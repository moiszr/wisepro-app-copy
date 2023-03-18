import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksManagementPage } from './tasks-management.page';

const routes: Routes = [
  {
    path: '',
    component: TasksManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksManagementPageRoutingModule {}
