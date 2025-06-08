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
    { itemCode: '112135', description: 'Dettol', groupName: 'Cleaning', stock: 200 },
    { itemCode: '112136', description: 'Soap', groupName: 'Cleaning ', stock: 150 },
    { itemCode: '112137', description: 'Spray', groupName: 'Cleaning ', stock: 80 },
  ]
    
    constructor(private dialogRef: MatDialogRef<AllitemPopupComponent>, private dialog:MatDialog) { }
    onClose(): void {
      this.dialogRef.close();
    }
      createItem(): void {
    this.dialog.open(CreateitemPopupComponent, {
      width: '600px'
    });
}
}
