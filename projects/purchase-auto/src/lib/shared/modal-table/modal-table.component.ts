import { Component, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'lib-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent {
  searchTerm: string = '';
  documentType = 'Purchase Invoice';
  showInfoModal = false;
  showImgDialog: boolean = false;

  @Input() search: string = '';

  columns = [
    { header: 'SN', def: 'sn' },
    { header: 'Image', def: 'image' },
    { header: 'Upload By', def: 'uploadBy' },
    { header: 'Filename', def: 'filename' },
    { header: 'Upload Date', def: 'uploadDate' },
    { header: 'Action', def: 'action' }
  ];

  get displayedColumns(): string[] {
    return this.columns.map(col => col.def);
  }
  data = [
    { image: '/assets/bill.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/bill.png', uploadBy: 'jeena', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/2.png', uploadBy: 'elsa', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/2.png', uploadBy: 'kiran', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'ishan', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'saksham', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mahiraa', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/2.png', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mihika', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Sami', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Maria', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/2.png', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
  ];

  filteredData = [...this.data];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['search']) {
      this.applySearch();
    }
  }
  applySearch() {
    if (!this.search) {
      this.filteredData = this.data;
    } else {
      const term = this.search.toLowerCase();
      this.filteredData = this.data.filter(item =>
        Object.values(item).some(val =>
          String(val).toLowerCase().includes(term)
        )
      );
    }
  }
  deleteRow(row: any): void {
    const index = this.filteredData.indexOf(row);
    if (index > -1) {
      this.filteredData.splice(index, 1);
      this.filteredData = [...this.filteredData];
    }
    const originalIndex = this.data.indexOf(row);
    if (originalIndex > -1) {
      this.data.splice(originalIndex, 1);
      this.data = [...this.data];
    }
  }
  imgModalVisible = false;
  selectedImage: string | null = null;

  showImgModal(image: string): void {
    this.selectedImage = image;
    this.imgModalVisible = true;
  }
  closeImgModal(): void {
    this.imgModalVisible = false;
    this.selectedImage = null;
  }

  //pagination ko lagi
  p: number = 0; 
  itemsPerPage: number = 5;

  get filteredDataPaginated() {
    const start = (this.p - 1) * this.itemsPerPage;
    return this.filteredData.slice(start, start + this.itemsPerPage);
  }

  openInfoModal() {
    this.showInfoModal = true;
  }

  closeInfoModal() {
    this.showInfoModal = false;
  }


}

