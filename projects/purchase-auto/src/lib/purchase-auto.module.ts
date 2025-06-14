import { CommonModule } from '@angular/common';
import { PurchaseAiComponent } from './purchase-ai/purchase-ai.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
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
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { ModalInfoComponent } from './shared/modal-info/modal-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailInfoComponent } from './shared/detail-info/detail-info.component';
import { SupplierInfoComponent } from './shared/supplier-info/supplier-info.component';
import { ProductTableComponent } from './shared/product-table/product-table.component';
import { SuggestPopupComponent } from './shared/suggest-popup/suggest-popup.component';
import { AllitemPopupComponent } from './shared/allitem-popup/allitem-popup.component';
import { CreateitemPopupComponent } from './shared/createitem-popup/createitem-popup.component';

@NgModule({
  declarations: [PurchaseAiComponent, ModalHeaderComponent, ModalHeaderComponent, ModalTableComponent, ModalTabsComponent, ModalInfoComponent, DetailInfoComponent, SupplierInfoComponent, ProductTableComponent, SuggestPopupComponent, AllitemPopupComponent, CreateitemPopupComponent],
  imports: [
    ReactiveFormsModule,
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
    MatDialogModule,
    NgxPaginationModule,
    MatNativeDateModule
  ],
  exports: [PurchaseAiComponent, ModalHeaderComponent, ModalTableComponent, ModalTabsComponent],
})
export class PurchaseAutoModule { }
