import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Emitters } from '../emitters/emitters';

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
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  submit(): void {
    this.apiService.login(this.form.getRawValue())
      .subscribe(data => {
        let obj_data = JSON.parse(JSON.stringify(data));
        localStorage.setItem('token', obj_data.access);
        Emitters.authEmitter.emit(true);
        this.router.navigate(['/']);
      }, error => {
        this.type = 'danger';
        this.message = 'Usuário inválido!';
        Emitters.authEmitter.emit(false);
      });
  }
}
