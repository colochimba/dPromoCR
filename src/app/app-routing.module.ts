import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{path:'tab1', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'ingresar', loadChildren: './ingresar/ingresar.module#IngresarPageModule' },
  { path: 'oferta-detalle', loadChildren: './oferta-detalle/oferta-detalle.module#OfertaDetallePageModule' },
  { path: 'pago-membresia', loadChildren: './pago-membresia/pago-membresia.module#PagoMembresiaPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'mispromos', loadChildren: './mispromos/mispromos.module#MispromosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
