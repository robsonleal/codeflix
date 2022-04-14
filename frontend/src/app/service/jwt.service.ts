import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Injectable({
  providedIn: 'root'
})

export class JwtService {
  private readonly authURL = environment['authURL'];
  private readonly baseURL = environment['baseURL'];
  private readonly registerURL = environment['baseURL'] + 'api/users/';
  private readonly modulesURL = this.baseURL + 'modulos/';
  private readonly classesURL = this.baseURL + 'aulas/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  login(form: any) {
    return this.http.post<{ access: string }>(this.authURL, form).pipe(tap(res => {
      localStorage.setItem('token', res.access);
      Emitters.authEmitter.emit(true);
      this.router.navigate(['/']);
    }, error => console.log(error)))
  }

  register(form: any) {
    return this.http.post(this.registerURL, form).pipe(tap(res => {
      this.router.navigate(['/login']);
    }))
  }

  logout() {
    Emitters.authEmitter.emit(false);
    localStorage.removeItem('token');
  }

  getAllModules() {
    return this.http.get(this.modulesURL)
  }

  getAllClasses() {
    return this.http.get(this.classesURL)
  }

  getModule(idModule: string) {
    return this.http.get(this.modulesURL + `${idModule}/`)
  }


  getClassesbyModule(idModule: string) {
    return this.http.get(this.modulesURL + `${idModule}/aulas/`)
  }

  /*ping() {
    this.http.delete("http://127.0.0.1:8000/aulas/1").subscribe(
      (dados) => console.log(dados),
      (err) => console.log(err)
    );

    delete(object_name: string, object_id: string) {
    return this.http.delete(`${this.baseURL}${object_name}/${object_id}`)
  }
  }*/
}
