import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Usuario} from './login/Usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types variable-name
  login(user_: string, pass: string): Observable<boolean>{
    // tslint:disable-next-line:ban-types
    return this.http.post<boolean>('http://localhost:3000/login',
      { User: user_, Password: pass}
      );

  }
}
