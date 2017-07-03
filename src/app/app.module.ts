import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//início
import { livrando_linha_do_tempo } from '../pages/livrando_linha_do_tempo/livrando_linha_do_tempo';
import { LivrandoPerfil } from '../pages/livrando_perfil/livrando_perfil';
import { livrando_doar } from '../pages/livrando_doar/livrando_doar';
import { livrando_emprestar } from '../pages/livrando_emprestar/livrando_emprestar';
import { livrando_trocar } from '../pages/livrando_trocar/livrando_trocar';
import { livrando_vender } from '../pages/livrando_vender/livrando_vender';
import { livrando_meus_amigos } from '../pages/livrando_meus_amigos/livrando_meus_amigos';
import { livrando_meus_livros } from '../pages/livrando_meus_livros/livrando_meus_livros';
import { livrando_livros_desejados } from '../pages/livrando_livros_desejados/livrando_livros_desejados';
import { livrando_tabs } from '../pages/livrando_tabs/livrando_tabs';
//fim

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	livrando_linha_do_tempo,
	LivrandoPerfil,
	livrando_doar,
	livrando_emprestar,
	livrando_trocar,
	livrando_vender,
	livrando_meus_amigos,
	livrando_meus_livros,
	livrando_livros_desejados,
	livrando_tabs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	livrando_linha_do_tempo,
	LivrandoPerfil,
	livrando_doar,
	livrando_emprestar,
	livrando_trocar,
	livrando_vender,
	livrando_meus_amigos,
	livrando_meus_livros,
	livrando_livros_desejados,
	livrando_tabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
