import { AfterViewInit, Component, ViewChild,   ChangeDetectorRef} from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-modal-tabs',
  templateUrl: './modal-tabs.component.html',
  styleUrls: ['./modal-tabs.component.css']
})

export class ModalTabsComponent implements AfterViewInit {
  selectedIndex = 0;
  tabs: { label: string; content: TemplateRef<any> }[] = [];

  @ViewChild('pendingContent') pendingContent!: TemplateRef<any>;
  @ViewChild('completeContent') completeContent!: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tabs = [
      { label: 'Pending', content: this.pendingContent },
      { label: 'Complete', content: this.completeContent },
    ];
    this.selectedIndex = 0; // Set default selected tab
    this.cdr.detectChanges();
  }
}
