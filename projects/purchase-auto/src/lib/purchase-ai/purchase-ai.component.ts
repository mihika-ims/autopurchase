import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'lib-purchase-ai',
  templateUrl: './purchase-ai.component.html',
  styleUrls: ['./purchase-ai.component.css']
})
export class PurchaseAiComponent {
  selectedTab = 'pending';
  documentType = 'Purchase Invoice';
   constructor(private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  openInfoModal() {
  this.dialog.open(ModalInfoComponent, {
    width: '600px'
  });
  }
}
