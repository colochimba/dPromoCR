import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OfertasProviderService } from './ofertas-provider.service';
import { HttpClientModule } from '@angular/common/http';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import {NoticiaPage} from './noticia/noticia.page';


import { IonicStorageModule } from '@ionic/storage';
import { PayPal } from '@ionic-native/paypal/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent, NoticiaPage],
  entryComponents: [NoticiaPage],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            BrowserAnimationsModule,
            MatExpansionModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OfertasProviderService,
    AngularFireDatabase,
    PayPal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
