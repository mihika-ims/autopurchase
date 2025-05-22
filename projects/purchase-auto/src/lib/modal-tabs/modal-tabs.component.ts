import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-modal-tabs',
  templateUrl: './modal-tabs.component.html',
  styleUrls: ['./modal-tabs.component.css']
})

export class ModalTabsComponent implements AfterViewInit {
  selectedIndex = 0;

  @ViewChild('pendingTab') pendingTab!: TemplateRef<any>;
  @ViewChild('CompleteTab') CompleteTab!: TemplateRef<any>;

  tabs: { label: string; content: TemplateRef<any> }[] = [];

  ngAfterViewInit() {
    this.tabs = [
      { label: 'pending', content: this.pendingTab },
      { label: 'complete', content: this.CompleteTab }
    ];
  }
}

