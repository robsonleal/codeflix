import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListModuleDetailComponent implements OnInit {
  object_name: string = '';
  objects: any;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.object_name = 'Módulos';
    this.getModule();
    this.handleError();
  }

  getModule(): void {
    this.apiService.getModules()
      .subscribe(
        data => {
          this.objects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar componente, tente novamente mais tarde!';
  }
}
