import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertTypes } from '../alert-modal.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  message: string = 'Erro! mensagem não informada!';
  type: AlertTypes = AlertTypes.DANGER;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide()
  }
}
