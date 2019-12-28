import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PoliticasPrivacidadPage } from './politicas-privacidad.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticasPrivacidadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PoliticasPrivacidadPage]
})
export class PoliticasPrivacidadPageModule {}
