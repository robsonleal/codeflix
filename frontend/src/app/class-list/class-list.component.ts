import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  currentModule: any;
  currentClassesByModule: any;

  constructor(
    private route: ActivatedRoute,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
    this.getModule(this.route.snapshot.params['id']);
    this.getClassesByModule(this.route.snapshot.params['id']);
  }

  getModule(id: string): void {
    this.jwtService.getModule(id)
      .subscribe(
        data => {
          this.currentModule = data;
          console.log(data);
        }, error => {
          console.log(error)
        });
  }

  getClassesByModule(id: string): void {
    this.jwtService.getClassesbyModule(id)
      .subscribe(
        data => {
          this.currentClassesByModule = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
  }
}
