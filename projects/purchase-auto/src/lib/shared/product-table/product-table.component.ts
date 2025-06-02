import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent{

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
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},
    {hsCode: '112134',itemFromDoc: 'Handwash',suggestedItem: 'Handwash ',suggestedCode: '112134',unit: 'KG',qty: 122,rate: 1000,discount: '18%',amount: 122000,mapping: 'Based on History',verify: false},

  ];
  selectedProductImage: string | null = null;

onLibraryImageSelected(imageUrl: string) {
  this.selectedProductImage = imageUrl;
}
}
