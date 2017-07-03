import { Component } from '@angular/core';

import { App, MenuController } from 'ionic-angular';

import { LivrandoPerfil } from '../livrando_perfil/livrando_perfil';
import { livrando_meus_amigos } from '../livrando_meus_amigos/livrando_meus_amigos';
import { livrando_meus_livros } from '../livrando_meus_livros/livrando_meus_livros';
import { livrando_livros_desejados } from '../livrando_livros_desejados/livrando_livros_desejados';

@Component({
  selector: 'page-livrando_tabs',
  templateUrl: 'livrando_tabs.html'
})
export class livrando_tabs {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LivrandoPerfil;
  tab2Root: any = livrando_meus_amigos;
  tab3Root: any = livrando_meus_livros;
  tab4Root: any = livrando_livros_desejados

  constructor(public app: App, menu: MenuController) {
	menu.enable(true);
  }
}
