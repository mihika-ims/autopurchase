import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() tabType: 'pending' | 'completed' = 'pending';

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
  pendingData = [
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
  completedData = [
    { image: '/assets/bill.png', uploadBy: 'Sampada', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/2.png', uploadBy: 'Yana', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Ruby', filename: 'file3.pdf', uploadDate: new Date() },
    { image: '/assets/2.png', uploadBy: 'Pony', filename: 'file4.pdf', uploadDate: new Date() },
  ];
  @Output() imageSelected = new EventEmitter<string>();

  onLibraryImageSelected(imageUrl: string) {
  this.selectedImage = imageUrl;
  this.showDetailInfo = false;
  this.imageSelected.emit(imageUrl); 
}

  get currentData() {
    return this.tabType === 'pending' ? this.pendingData : this.completedData;
  }

  get filteredData() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.currentData;
    return this.currentData.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  }

  imgModalVisible = false;
  selectedImage: string | null = null;
  private imgModalTimer: any;
  showDetailInfo = false;

  @Output() closePurchaseAI = new EventEmitter<void>();

  showImgModal(image: string){
    this.selectedImage = image;
    this.imgModalVisible = true;
    this.imgModalTimer = setTimeout(() => {
      this.imgModalVisible = false;
      this.showDetailInfo = true;
       this.closePurchaseAI.emit(); 
  }, 2000);
  }

  closeImgModal(): void {
    this.imgModalVisible = false;
    this.selectedImage = null;
    if (this.imgModalTimer) {
      clearTimeout(this.imgModalTimer);
      this.imgModalTimer = null;
    }
    this.showDetailInfo = false;
  }
  //pagination ko lagi
  p: number = 1;
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

