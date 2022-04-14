import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';
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
    private jwtService: JwtService,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.object_name = 'Aulas';
    this.getModule();
  }

  getModule(): void {
    this.jwtService.getAllClasses()
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
  }

  /*deleteObject() {
    this.jwtService.delete(this.object_name.toLowerCase(), this.currentObject.id)
      .subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error)
      });
  }*/
}
