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
  onPageChange($event: Event) {
    throw new Error('Method not implemented.');
  }
  @Input() search: string = '';
  itemsPerPage = 5;
  currentPage = 1;

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
    { image: '/assets/1.png', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
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
  constructor(private dialog: MatDialog) { }

  openImageDialog(image: string) {
    this.dialog.open(ImageDialogComponent, {
      data: { image },
      width: '400px',
      height: '400px',
      panelClass: 'image-dialog-top'
    });
  }
}
