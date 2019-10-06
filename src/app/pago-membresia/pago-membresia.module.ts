import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagoMembresiaPage } from './pago-membresia.page';

const routes: Routes = [
  {
    path: '',
    component: PagoMembresiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagoMembresiaPage]
})
export class PagoMembresiaPageModule {}
