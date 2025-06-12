import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuggestPopupComponent } from '../suggest-popup/suggest-popup.component';
@Component({
  selector: 'lib-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  constructor(private dialog: MatDialog) { }


  displayedColumns: string[] = [
    'sn', 'hsCode', 'itemFromDoc', 'suggestedItem', 'suggestedCode',
    'unit', 'qty', 'rate', 'discount', 'amount', 'mapping', 'verify'
  ];
  columns = [
    { header: 'SN', def: 'sn' },
    { header: 'HScode', def: 'hsCode' },
    { header: 'Item From Doc', def: 'itemFromDoc' },
    { header: 'Suggested Item', def: 'suggestedItem' },
    { header: 'Suggested Code', def: 'suggestedCode' },
    { header: 'Unit', def: 'unit' },
    { header: 'Quantity', def: 'qty' },
    { header: 'Rate', def: 'rate' },
    { header: 'Discount', def: 'discount' },
    { header: 'Amount', def: 'amount' },
    { header: 'Mapping', def: 'mapping' },
    { header: 'Verify', def: 'verify' }
  ];

  dataSource = [
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: '', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: true },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: '', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: true },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: '', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },
    { hsCode: '112134', itemFromDoc: 'Handwash', suggestedItem: 'Handwash ', suggestedCode: '112134', unit: 'KG', qty: 122, rate: 1000, discount: '18%', amount: 122000, mapping: 'History', verify: false },

  ];
  getBorderColorForRow(row: any): string {
    for (const key in row) {
      if (key !== 'sn' && key !== 'verify') {
        const value = row[key];
        if (value === null || value === undefined || value === '') {
          return 'red';
        }
      }
    }
    return 'blue';
  }
  selectedColumn: string | null = null;
  selectedRow: any = null;

  openPopup(columnDef: string, row: any): void {
    this.selectedColumn = columnDef;
    this.selectedRow = row;

    this.dialog.open(SuggestPopupComponent, {
      data: {
        column: columnDef,
        row: row
      },
      width: '400px'
    });
  }
}
