import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from '../alert-modal.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {
  title: string = '';

  constructor(
    private modalRef: BsModalRef,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.modalRef.hide()
  }
}
