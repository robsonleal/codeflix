import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout() {
    this.jwtService.logout()
  }
}
