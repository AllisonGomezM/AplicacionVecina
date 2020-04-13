import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  constructor(private http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
   }
  
   login(newUser){
    return this.http.post<any>('https://redveci.com/api/login&email='+newUser.email+'&password='+newUser.password,
      {
         "email": newUser.email,
         "password":newUser.password,
        
      },
           
    );
  }
}
