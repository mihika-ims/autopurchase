import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {
  @Input() title: string = 'Modal Title';
  @Input() showLoadButton: boolean = true;
  @Input() loadButtonText: string = 'LOAD';
  @Input() cancelButtonText: string = 'CANCEL';

  @Output() onLoad = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  load(): void {
    this.onLoad.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
