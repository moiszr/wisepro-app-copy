import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesManagementPage } from './notes-management.page';

const routes: Routes = [
  {
    path: '',
    component: NotesManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesManagementPageRoutingModule {}
