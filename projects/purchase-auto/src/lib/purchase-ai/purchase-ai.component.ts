import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-purchase-ai',
  templateUrl: './purchase-ai.component.html',
  styleUrls: ['./purchase-ai.component.css']
})
export class PurchaseAiComponent {
  selectedTab = 'pending';
  documentType = 'Purchase Invoice';

  data = [
    { image: 'https://via.placeholder.com/40', uploadBy: 'John', filename: 'file1.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() }

  ];

  filteredData = [...this.data];
   constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
