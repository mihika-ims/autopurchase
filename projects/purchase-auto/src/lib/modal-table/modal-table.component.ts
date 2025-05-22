import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent {
  
    data = [
      // Dummy data for now
      { image: 'https://via.placeholder.com/40', uploadBy: 'Mimi', filename: 'file1.pdf', uploadDate: new Date() },
      { image: 'https://via.placeholder.com/40', uploadBy: 'Mihika', filename: 'file2.pdf', uploadDate: new Date() },
      // { image: 'https://via.placeholder.com/40', uploadBy: 'Mahi', filename: 'file2.pdf', uploadDate: new Date() },
      // { image: 'https://via.placeholder.com/40', uploadBy: 'Mahiraa', filename: 'file2.pdf', uploadDate: new Date() },
      // { image: 'https://via.placeholder.com/40', uploadBy: 'Jane', filename: 'file2.pdf', uploadDate: new Date() },
    ];
  
    filteredData = [...this.data];
}
