import { CommonModule } from '@angular/common';
import { PurchaseAiComponent } from './purchase-ai/purchase-ai.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalTableComponent } from './modal-table/modal-table.component';
import { ModalTabsComponent } from './modal-tabs/modal-tabs.component';

@NgModule({
  declarations: [PurchaseAiComponent, ModalHeaderComponent, ModalHeaderComponent, ModalTableComponent, ModalTabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
  ],
  exports: [PurchaseAiComponent, ModalHeaderComponent, ModalTableComponent, ModalTabsComponent],
})
export class PurchaseAutoModule { }
