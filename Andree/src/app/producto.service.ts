import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Producto} from './login/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto>{
    return this.http.get<Producto>('http://localhost:3000/producto');
  }
}
