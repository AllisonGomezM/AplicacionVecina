import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
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
  constructor(public alertCtrl: AlertController, private servicioLogin:ServicioLoginService, public navCtrl: NavController) { }

  login(){
    if(this.newUser.email==""&&this.newUser.password==""){
      this.doAlert();
    }else{
      console.log(this.newUser.email,this.newUser.password);
     
      this.servicioLogin.login(this.newUser).then((data)=>{
        console.log(this.newUser);
        if (data["ok"]){
          console.log(data); 
        }
      }) 
      this.navCtrl.navigateRoot('folderpage');
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

  ngOnInit() {
    
  }

}

interface IUser{
  email:String;
  password:String;
  }
