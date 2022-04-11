import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

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
    private apiService: ApiService,
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
    this.apiService.register(this.form.getRawValue())
    .subscribe(data => {
      this.router.navigate(['/login']);
    }, error => {
      this.type = 'danger'
      this.message = 'Erro ao fazer o registro!';
    });
  }
}