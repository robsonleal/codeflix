import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  module: any;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.retrieveCroploss()
  }

  retrieveCroploss(): void {
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
}
