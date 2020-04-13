import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaUserPage } from './consulta-user.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaUserPageRoutingModule {}
