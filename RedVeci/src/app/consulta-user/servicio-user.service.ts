import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioUserService {
 
  constructor(private http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
   }
   buscarUsuario(){
    return this.http.get('https://redveci.com/api/profile');
  }
}
