import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DatapokemonService } from '../../services/datapokemon.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detallepokemon',
  templateUrl: './detallepokemon.page.html',
  styleUrls: ['./detallepokemon.page.scss'],
})
export class DetallepokemonPage implements OnInit {

  datos : any;
  nombre: string;
  abilities : any;
  baseexperence: number;
  forms: any;
  id: number;
  height: number;
  weight: number;
  gameindice: any;
  version: any;
  types: any;
  stats: any;
  image:string;
  effectentries: any;

  constructor(private route: ActivatedRoute, private router: Router, public dataPokemon: DatapokemonService, public alertCtrl: AlertController) { 
    this.route.queryParams.subscribe(params => {
      this.datos = this.router.getCurrentNavigation().extras.state.datos;
      this.nombre = this.datos.name;
      // console.log(this.datos);
    });
  }

  ngOnInit() {
      this.dataPokemon.ObtenerUnPokemon(this.datos.url).subscribe(pokemon =>{
        // console.log(pokemon.abilities);
        this.abilities = pokemon.abilities;
        this.baseexperence = pokemon.base_experience;
        this.forms = pokemon.forms;
        this.id = pokemon.id;
        this.height = pokemon.height;
        this.weight = pokemon.weight;
        this.types = pokemon.types;
        this.stats = pokemon.stats;
        this.image = pokemon.sprites.other['official-artwork']['front_default'];
      });
  }

  ability(url){
    console.log(url);
   this.dataPokemon.ObtenerAbility(url).subscribe(async ability => {
     this.effectentries = ability.effect_entries;
    //  console.log(this.effectentries);
     var existeffect = this.effectentries.find(function(exus){
      return exus.language.name === 'en';
    });
    //  console.log(existeffect);

     const alert = await this.alertCtrl.create({
      cssClass: "alerColorError",
      message: '<strong>'+existeffect.effect+'</strong>',
    });
    await alert.present(); 
     
   });
  }

  back(){
    this.router.navigate(['home']);
  }

}
