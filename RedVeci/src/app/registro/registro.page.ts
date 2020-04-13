import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioRegistroService } from "./servicio-registro.service";



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  newCuenta: ICuenta ={
    nombre:"",
    email:"",
    password:"",
    pass_confirmar:"",
  };

  regi = [];
  constructor(public alertCtrl: AlertController, private servicioRegistro:ServicioRegistroService) { }
  
  crear(){
    console.log(this.newCuenta);
    if(this.newCuenta.nombre==""||this.newCuenta.email==""||this.newCuenta.password==""||this.newCuenta.pass_confirmar==""){
      this.doAlert();
    }
    if(this.newCuenta.password==this.newCuenta.pass_confirmar){
      this.servicioRegistro.crear(this.newCuenta).subscribe((data)=>{
        this.regi=data;
        if (data["ok"]){
          console.log(data);
          this.guardar();
        }
      })

    }else{
      this.AlertPass();
    }

  }
  async doAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Campos vacios',
      subHeader: 'Alguno de los campos están vacios',
      buttons: ['OK']
    });

    await alert.present();
  }
  async AlertPass() {
    const alert = await this.alertCtrl.create({
      header: 'Ups!',
      subHeader: 'Las contraseñas no coinciden',
      buttons: ['OK']
    });

    await alert.present();
  }

  async guardar() {
    const alert = await this.alertCtrl.create({
      header: 'Genial!',
      subHeader: 'Ya creamos tu cuenta',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
interface ICuenta{
  nombre:String;
  email:String;
  password:String;
  pass_confirmar:String;
  }