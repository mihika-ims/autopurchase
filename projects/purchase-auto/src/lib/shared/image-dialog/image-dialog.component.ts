import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css'],
})
export class ImageDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { image: string },
    private dialogRef: MatDialogRef<ImageDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}

