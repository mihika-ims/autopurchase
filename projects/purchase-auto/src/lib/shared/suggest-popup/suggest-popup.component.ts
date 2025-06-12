import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AllitemPopupComponent } from '../allitem-popup/allitem-popup.component';

@Component({
  selector: 'lib-suggest-popup',
  templateUrl: './suggest-popup.component.html',
  styleUrls: ['./suggest-popup.component.css']
})
export class SuggestPopupComponent {
  searchTerm: string= '';
  filteredItems(): string[] {
  if (!this.searchTerm) return this.items;
  const lowerTerm = this.searchTerm.toLowerCase();
  return this.items.filter(item => item.toLowerCase().includes(lowerTerm));
}

  items = ['handwash', 'dettol', 'soap', 'spray'];
  constructor(private dialogRef: MatDialogRef<SuggestPopupComponent>, private dialog:MatDialog) { }
  onClose(): void {
    this.dialogRef.close();
  }
    openShowAllItems(): void {
    this.dialog.open(AllitemPopupComponent, {
      width: '600px'
    });
  }
}
