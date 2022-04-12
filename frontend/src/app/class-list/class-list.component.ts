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

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getClassesByModule(this.route.snapshot.params['id']);
  }

  getClassesByModule(id: string): void {
    this.apiService.getClassesbyModule(id)
      .subscribe(
        data => {
          this.currentClasses = data
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
