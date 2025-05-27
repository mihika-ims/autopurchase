import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'lib-modal-tabs',
  templateUrl: './modal-tabs.component.html',
  styleUrls: ['./modal-tabs.component.css']
})

export class ModalTabsComponent {
  searchTerm: string = '';
  documentType = 'Purchase Invoice';
  showInfoModal = false;
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  openInfoModal() {
    this.showInfoModal = true;
  }

  closeInfoModal() {
    this.showInfoModal = false;
  }

}

