import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-purchase-ai',
  templateUrl: './purchase-ai.component.html',
  styleUrls: ['./purchase-ai.component.css']
})
export class PurchaseAiComponent {
  selectedTab = 'pending';
  documentType = 'Purchase Invoice';
  
  activeTab = new FormControl('Ppending'); 

  data = [
    // Dummy data for now
    { image: 'https://via.placeholder.com/40', uploadBy: 'John', filename: 'file1.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },

    { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() }

  ];

  filteredData = [...this.data];
  page = 1;
  rowsPerPage = 10;
  totalPages = 1;
    ngOnInit() {
    // Load your data here
    this.filteredData = this.getPagedData();
    this.updateTotalPages();
  }


    getPagedData() {
    const start = (this.page - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    return this.data.slice(start, end);
  }
  updateTotalPages() {
    this.totalPages = Math.ceil(this.data.length / this.rowsPerPage) || 1;
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.filteredData = this.getPagedData();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.filteredData = this.getPagedData();
    }
  }

  goToPage(pg: number) {
    this.page = pg;
    this.filteredData = this.getPagedData();
  }

  getPageNumbers() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  increaseRowsPerPage() {
    this.rowsPerPage++;
    this.page = 1;
    this.updateTotalPages();
    this.filteredData = this.getPagedData();
  }

  decreaseRowsPerPage() {
    if (this.rowsPerPage > 1) {
      this.rowsPerPage--;
      this.page = 1;
      this.updateTotalPages();
      this.filteredData = this.getPagedData();
    }
  }
   applyFilter(event: any) {
    const value = event.target.value.toLowerCase();
    this.data = this.data.filter(row => row.filename.toLowerCase().includes(value));
    this.page = 1;
    this.updateTotalPages();
    this.filteredData = this.getPagedData();
  }

}
