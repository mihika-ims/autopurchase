import { CommonModule } from '@angular/common';
import { PurchaseAiComponent } from './purchase-ai/purchase-ai.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ModalHeaderComponent } from './shared/modal-header/modal-header.component';
import { ModalTableComponent } from './shared/modal-table/modal-table.component';
import { ModalTabsComponent } from './shared/modal-tabs/modal-tabs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ModalInfoComponent } from './shared/modal-info/modal-info.component';
@NgModule({
  declarations: [PurchaseAiComponent, ModalHeaderComponent, ModalHeaderComponent, ModalTableComponent, ModalTabsComponent, ModalInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule],
  exports: [PurchaseAiComponent, ModalHeaderComponent, ModalTableComponent, ModalTabsComponent],
})
export class PurchaseAutoModule { }
