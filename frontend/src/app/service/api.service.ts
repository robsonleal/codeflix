import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private readonly authURL = environment['authURL'];
  private readonly registerURL = environment['baseURL'] + 'api/users/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(form: any) {
    return this.http.post(this.authURL, form)
  }

  register(form: any) {
    return this.http.post(this.registerURL, form)
  }


}
