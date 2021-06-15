import {Component, OnInit} from '@angular/core';
import {Usuario, Tienda, Producto} from './Usuario';
import {HttpClient} from '@angular/common/http';
import {TiendaService} from '../tienda.service';
import {Observable} from 'rxjs';
import {ProductoService} from '../producto.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = { user_name: '', password: ''};
  producto: Producto;
  loggeado = false;


  users: any[] = [
    {user_name: 'Andree', password: ''},
    {user_name: 'Carlos', password: ''}
  ];
  tiendas: Tienda[] = [] ;

  constructor(private service_tienda: TiendaService, private product_service: ProductoService, private login_service: LoginService) {
  }


  ngOnInit(): void {
    this.getTiendas();
    this.getProducto();
    console.log(this.producto);
  }

  // tslint:disable-next-line:typedef
  getTiendas(){
    this.service_tienda.getTiendas()
      .subscribe(tiendas => tiendas.forEach(value => this.tiendas.push(value)));
  }

  // tslint:disable-next-line:typedef
  getProducto(){
    this.product_service.getProducts()
      .subscribe(value => this.producto = value);
  }

  // tslint:disable-next-line:typedef
  login(){
    this.login_service.login(this.usuario.user_name, this.usuario.password)
      .subscribe(value => {
        this.loggeado = value;
        if (this.loggeado) {
          //redireccionar a index
        }
      });
  }

  // tslint:disable-next-line:typedef
  // async cargar() {
  //   let response = await this.onload();
  //   let resp = await this.http.get('http://localhost:3000/getArreglo');
  //   console.log(resp);
  // }
  //
  //
  // onload(){
  //   return new Promise( (resolve, reject) => {
  //     fetch('http://localhost:3000/getArreglo', {method: 'GET'})
  //       .then( resp => resolve(resp))
  //       .catch(erro => reject(erro));
  //   });
  // }



}
