import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioUserService } from "./servicio-user.service";

@Component({
  selector: 'app-consulta-user',
  templateUrl: './consulta-user.page.html',
  styleUrls: ['./consulta-user.page.scss'],
})
export class ConsultaUserPage implements OnInit {
  
  usuarios;
  constructor(public alertCtrl: AlertController, private servicioUsuario:ServicioUserService) {
  }

  ngOnInit() {
    console.log('Servicio');
      this.servicioUsuario.buscarUsuario().subscribe((data)=>{
          this.usuarios=data;
          console.log(data);
        },
        (error)=>{console.log(error);}
        );
  }

}
