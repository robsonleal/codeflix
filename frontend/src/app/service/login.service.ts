import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly authURL = environment['authURL'];
  
  constructor(
    private http: HttpClient
  ) { }

  login(form:any) {
    this.http.post(this.authURL, form)
      .subscribe(data => {
        localStorage.setItem('token', JSON.parse(JSON.stringify(data)).access)
      }, error => {
        console.error('Erro ao fazer login!')
      });
  }
}
