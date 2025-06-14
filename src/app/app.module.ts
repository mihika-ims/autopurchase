import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseAutoModule } from 'projects/purchase-auto/src/lib/purchase-auto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PurchaseAutoModule,
    NgxPaginationModule,
    BrowserAnimationsModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

