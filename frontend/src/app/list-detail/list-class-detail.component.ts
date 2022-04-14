import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListClassDetailComponent implements OnInit {
  objectName: string = 'Aulas';
  objectUrlName: string = 'aulas';
  objects: any;
  currentObject: any;
  currentIndex: any;

  constructor(
    private jwtService: JwtService,
    private router: Router,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    if (this.jwtService.loggedIn()) {
      this.getAllClasses();
    } else {
      console.error('Usuário não autenticado!')
    }
  }

  getAllClasses(): void {
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

  deleteObject() {
    this.jwtService.delete(this.objectUrlName, this.currentObject.id)
      .subscribe(data => {
        console.log(data)
        this.getAllClasses()
      }, error => {
        console.log(error)
      });
  }

  editObject() {
    this.router.navigate(['/editar'], { queryParams: { object: 'aulas', id: this.currentObject.id } })
  }

  addObject() {
    this.router.navigate(['/add'], { queryParams: { object: 'aulas' } });
  }
}
