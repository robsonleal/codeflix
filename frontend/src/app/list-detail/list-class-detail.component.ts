import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListClassDetailComponent implements OnInit {
  object_name: string = '';
  objects: any;
  currentObject: any;
  currentIndex: any;

  constructor(
    private apiService: ApiService,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.object_name = 'Aulas';
    this.getModule();
  }

  getModule(): void {
    this.apiService.getClasses()
      .subscribe(
        data => {
          this.objects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  openInfo(id: any) {
    this.alertModalService.showInfo(id)
  }

  setActiveObject(object: any, index: any): void {
    this.currentObject = object;
    this.currentIndex = index;
    console.log(object)
  }
}
