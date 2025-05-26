import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent {
  @Output() close = new EventEmitter<void>();
  currentStep = 1;

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  
serverName: string = '';
userName: string = '';
password: string = '';

}
