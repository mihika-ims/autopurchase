import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateitemPopupComponent } from '../createitem-popup/createitem-popup.component';

@Component({
  selector: 'lib-allitem-popup',
  templateUrl: './allitem-popup.component.html',
  styleUrls: ['./allitem-popup.component.css']
})
export class AllitemPopupComponent {
  displayedItems = [
    { itemCode: '112134', description: 'Handwash', groupName: 'Cleaning', stock: 100 },

    { itemCode: '112134', description: 'Handwash', groupName: 'Cleaning', stock: 100 },
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112139', description: 'Phenol', groupName: 'Cleaning', stock: 20 },
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112136', description: 'Soap', groupName: 'Cleaning ', stock: 150 },
    { itemCode: '112137', description: 'Spray', groupName: 'Cleaning ', stock: 80 },
  ]
    
  constructor(private dialogRef: MatDialogRef<CreateitemPopupComponent>, private dialog:MatDialog) { }
  onClose(): void {
    this.dialogRef.close();
  }
    openShowAllItems(): void {
    this.dialog.open(CreateitemPopupComponent, {
      width: '500px'
    });
  }
  searchTerm: string='';
  filteredItems() {
  if (!this.searchTerm?.trim()) return this.displayedItems;

  const term = this.searchTerm.toLowerCase();
  return this.displayedItems.filter(item =>
    item.itemCode?.toLowerCase().includes(term) ||
    item.description?.toLowerCase().includes(term) ||
    item.groupName?.toLowerCase().includes(term)
  );
}
  
}
