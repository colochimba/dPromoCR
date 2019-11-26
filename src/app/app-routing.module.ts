import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../app/servicios/auth-guard.service';

const routes: Routes = [
  { path: 'tab', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'ingresar', loadChildren: './ingresar/ingresar.module#IngresarPageModule' },
  { path: 'oferta-detalle', canActivate: [AuthGuardService], loadChildren: './oferta-detalle/oferta-detalle.module#OfertaDetallePageModule' },
  { path: 'pago-membresia', canActivate: [AuthGuardService], loadChildren: './pago-membresia/pago-membresia.module#PagoMembresiaPageModule' },
  { path: 'perfil', canActivate: [AuthGuardService], loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'mispromos', canActivate: [AuthGuardService], loadChildren: './mispromos/mispromos.module#MispromosPageModule' },
  { path: '', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '**', redirectTo: 'ingresar' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
