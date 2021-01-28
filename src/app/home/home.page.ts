import { Component } from '@angular/core';
import { DatapokemonService } from '../services/datapokemon.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datapokemon: any;
  newdatapokemon: any;

  constructor(public dataPokemon: DatapokemonService, public router: Router) {
    this.dataPokemon.ObtenerPokemon().subscribe(data => {
      this.datapokemon = data;
      this.newdatapokemon = this.datapokemon.results;
      // console.log(this.newdatapokemon);
    });
  }

  detallepokemon(datos){
    // console.log(datos.url);
    let navigatioExtras: NavigationExtras = {
      state: {
        datos: datos
      }
    };
    this.router.navigate(["/detallepokemon"],navigatioExtras);
  }

}
