import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesManagementPageRoutingModule } from './notes-management-routing.module';

import { NotesManagementPage } from './notes-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesManagementPageRoutingModule
  ],
  declarations: [NotesManagementPage]
})
export class NotesManagementPageModule {}
