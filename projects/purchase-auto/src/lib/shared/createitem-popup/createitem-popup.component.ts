import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-createitem-popup',
  templateUrl: './createitem-popup.component.html',
  styleUrls: ['./createitem-popup.component.css']
})
export class CreateitemPopupComponent{
     constructor(private dialogRef: MatDialogRef<CreateitemPopupComponent>, private dialog:MatDialog) { }
      onClose(): void {
        this.dialogRef.close();
    
      }
    
 itemName: string = '';
 itemCode: string = '';
  hsCode: string = '';
  itemGroup: string = '';
  stockUnit: string = '';
  itemType: string = '';

}

