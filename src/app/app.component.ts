import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	livrando_linha_do_tempo = livrando_linha_do_tempo;
	LivrandoPerfil = LivrandoPerfil;
	livrando_doar = livrando_doar;
	livrando_emprestar = livrando_emprestar;
	livrando_trocar = livrando_trocar;
	livrando_vender = livrando_vender;
	livrando_meus_amigos = livrando_meus_amigos;
	livrando_meus_livros = livrando_meus_livros;
	livrando_livros_desejados = livrando_livros_desejados;
	livrando_tabs = livrando_tabs;
  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(opcao){
	this.rootPage = opcao;
  };
}
