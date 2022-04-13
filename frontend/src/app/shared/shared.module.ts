import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { InfoModalComponent } from './info-modal/info-modal.component';


@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    InfoModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
    AlertModalComponent
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent,
    InfoModalComponent
  ]
})
export class SharedModule { }
