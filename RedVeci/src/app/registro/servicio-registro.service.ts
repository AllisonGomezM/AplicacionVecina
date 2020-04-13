import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {
  
  constructor(private http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
   }
  
   crear(newCuenta){
    return this.http.put<any>('https://redveci.com/api/register&name='+newCuenta.nombre+ '&email='+newCuenta.email+'&password='+newCuenta.password+'&password_confirmation='+newCuenta.pass_confirmar,
      {
         "name": newCuenta.nombre,
         "email": newCuenta.email,
         "password":newCuenta.password,
         "password_confirmation":newCuenta.pass_confirmar,
        
      },
           
    );
  }

}
