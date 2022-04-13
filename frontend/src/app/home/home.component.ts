import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  module: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveModule()
  }

  retrieveModule(): void {
    this.apiService.getModules()
    .subscribe(
      data => {
        this.module = data;
        console.log(data);
        console.log(this.module)
      },
      error => {
        console.log(error);
      });
  }

  moduleDetail(item: string) {
    console.log(item)
    this.router.navigate([`modulos/${item}/aulas`])
  }
}
