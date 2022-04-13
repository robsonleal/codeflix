import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  message: string = 'Oi, eu sou um alerta!';
  type: string = 'success';

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide()
  }

}
