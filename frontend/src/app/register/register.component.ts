import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  message: string = '';
  type: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private jwtService: JwtService,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      username: '',
      password: '',
    });
  }

  submit(): void {
    this.jwtService.register(this.form.getRawValue())
    .subscribe(data => {
      console.log(data)
    }, error => {
      this.type = 'danger'
      this.message = 'Erro ao fazer o registro!';
    });
  }
}