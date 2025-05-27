import { Component, Input, SimpleChanges } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'lib-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent {
  displayedColumns: string[] = ['sn', 'image', 'uploadBy', 'filename', 'uploadDate', 'action'];
  showImgDialog: boolean = false;
  onPageChange($event: Event) {
    throw new Error('Method not implemented.');
  }
  @Input() search: string = '';

  data = [
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mihika', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Sami', filename: 'file2.pdf', uploadDate: new Date() },
    { image: '/assets/1.png', uploadBy: 'Mahiraa', filename: 'file2.pdf', uploadDate: new Date() },
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

}

