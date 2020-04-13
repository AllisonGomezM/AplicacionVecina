import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaUserPageRoutingModule } from './consulta-user-routing.module';

import { ConsultaUserPage } from './consulta-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaUserPageRoutingModule
  ],
  declarations: [ConsultaUserPage]
})
export class ConsultaUserPageModule {}
