import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatapokemonService {

  constructor(private http: HttpClient) { }

  ObtenerPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(map(res =>{
      return res;
    }));
  }

  ObtenerUnPokemon(url){
    return this.http.get(url).pipe(map(res =>{
      return res;
    }));
  }

  ObtenerAbility(url){
    return this.http.get(url).pipe(map(res =>{
      return res;
    }));
  }
}
