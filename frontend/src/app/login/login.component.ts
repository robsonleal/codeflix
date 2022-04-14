import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  message: string = '';
  type: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  submit(): void {
    this.jwtService.login(this.form.getRawValue())
    .subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err)
    });
  }
}
