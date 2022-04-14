import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  module: any;

  constructor(
    private jwtService: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveModule()
    this.jwtService.loggedIn()
  }

  retrieveModule(): void {
    this.jwtService.getAllModules()
    .subscribe(
      data => {
        this.module = data;
        console.log(data);
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
