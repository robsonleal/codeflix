import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  currentClasses: any;
  currentModule: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getModule(this.route.snapshot.params['id']);
    this.getClassesByModule(this.route.snapshot.params['id']);
  }

  getModule(id: string): void {
    this.apiService.getModule(id)
      .subscribe(
        data => {
          this.currentModule = data;
          console.log(data);
        }, error => {
          console.log(error)
        });
  }

  getClassesByModule(id: string): void {
    this.apiService.getClassesbyModule(id)
      .subscribe(
        data => {
          this.currentClasses = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
  }
}
