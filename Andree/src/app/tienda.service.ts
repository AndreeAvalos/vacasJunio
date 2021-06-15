import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Tienda} from './login/Usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TiendaService {

  // @ts-ignore
  @Injectable()
  constructor( private http: HttpClient) { }

  public getTiendas(): Observable<Tienda[]>{
    return this.http.get<Tienda[]>('http://localhost:3000/getArreglo');
  }
}
