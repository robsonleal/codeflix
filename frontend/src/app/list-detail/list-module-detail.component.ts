import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { AlertModalService, AlertTypes } from '../shared/alert-modal.service';

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
    private alertModalService: AlertModalService
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
    this.alertModalService.showAlertDanger('Ferrou')
  }
}
