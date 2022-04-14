import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';
import { AlertModalService } from '../shared/alert-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})

export class ListModuleDetailComponent implements OnInit {
  objectName: string = 'Módulos';
  objectUrlName: string = 'modulos';
  objects: any;
  currentIndex: any;
  currentObject: any;

  constructor(
    private jwtService: JwtService,
    private router: Router,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    if (this.jwtService.loggedIn()) {
      this.getAllModules();
    } else {
      console.error('Usuário não autenticado!')
    }
  }

  getAllModules(): void {
    this.jwtService.getAllModules()
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
        this.getAllModules()
      }, error => {
        console.log(error)
      });
  }

  editObject() {
    this.router.navigate(['/editar'], { queryParams: { object: 'modulos', id: this.currentObject.id }})
  }

  addObject() {
    this.router.navigate(['/add'], { queryParams: { object: 'modulos' }});
  }
}
