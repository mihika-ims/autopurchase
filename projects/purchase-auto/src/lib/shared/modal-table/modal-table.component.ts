import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent {
  
    data = [
      { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
      { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
      { image: '/assets/1.png', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
      { image: '/assets/1.png', uploadBy: 'Mihika', filename: 'file2.pdf', uploadDate: new Date() },
      { image: '/assets/1.png', uploadBy: 'Mahi', filename: 'file2.pdf', uploadDate: new Date() },
       { image: '/assets/1.png', uploadBy: 'Mahiraa', filename: 'file2.pdf', uploadDate: new Date() },
       { image: '/assets/1.png', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    ];
  
    filteredData = [...this.data];
}
