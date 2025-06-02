import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 showPurchaseAI = false;

  onClosePurchaseAI() {
  this.showPurchaseAI = false;
}
}
