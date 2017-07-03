/*
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'livrando_linha_do_tempo.html'
})
export class livrando_linha_do_tempo {

  constructor(public navCtrl: NavController) {
    
  }

}
*/
import { Component } from '@angular/core';

import { App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-livrando_linha_do_tempo',
  templateUrl: 'livrando_linha_do_tempo.html'
})
export class livrando_linha_do_tempo {

	constructor(public app: App, menu: MenuController) {
		menu.enable(true);
	}

}