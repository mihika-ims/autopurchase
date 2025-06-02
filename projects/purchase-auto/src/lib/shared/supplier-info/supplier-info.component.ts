import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.css']
})
export class SupplierInfoComponent {
   supplierForm: FormGroup;

  suppliers = [
    { name: 'Supplier ABC Pvt Ltd', vatNo: '68327718829' },
    { name: 'Supplier XYZ Pvt Ltd', vatNo: '12345678901' },
  ];

  constructor(private fb: FormBuilder) {
    this.supplierForm = this.fb.group({
      supplierName: [''],
      vatNo: [''],
      invoiceNo: [''],
      invoiceDate: [''],
    });
  }

  onSupplierChange(event: Event) {
    const name = (event.target as HTMLSelectElement).value;
    const selected = this.suppliers.find(s => s.name === name);
    this.supplierForm.patchValue({
      vatNo: selected ? selected.vatNo : ''
    });
  }
}
