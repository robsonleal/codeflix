import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { ApiService } from '../service/api.service';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})

export class AlertModalService {

  constructor(
    private modalService: BsModalService,
  ) { }

  private showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = 'danger';
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSucess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS)
  }

  showInfo(id: any) {
    const bsModalRef: BsModalRef = this.modalService.show(InfoModalComponent);
    bsModalRef.content.title = id;
  }
}
