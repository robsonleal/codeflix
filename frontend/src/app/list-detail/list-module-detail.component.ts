import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListModuleDetailComponent implements OnInit {
  object_name: string = '';
  objects: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.object_name = 'Módulos';
    this.getModule();
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

}
