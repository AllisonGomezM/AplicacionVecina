import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioLoginService } from "../servicio-login.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  newUser: IUser ={
    email:"",
    password:"",
  };

  user = [];
  constructor(public alertCtrl: AlertController, private servicioLogin:ServicioLoginService) { }

  login(){
    console.log(this.newUser);
    if(this.newUser.email==""&&this.newUser.password==""){
      this.doAlert();
    }else{
      this.servicioLogin.login(this.newUser).subscribe((data)=>{
        this.user=data;
        if (data["ok"]){
          console.log(data);
          
        }
      }

      )
    }

  }
  async doAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Campos vacios',
      subHeader: 'Email o contraseña vacios',
      buttons: ['OK']
    });

    await alert.present();
  }
  olvido(){

  }
  
  ngOnInit() {
    
  }

}

interface IUser{
  email:String;
  password:String;
  }
