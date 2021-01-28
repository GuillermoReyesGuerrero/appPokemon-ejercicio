import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallepokemonPageRoutingModule } from './detallepokemon-routing.module';

import { DetallepokemonPage } from './detallepokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallepokemonPageRoutingModule
  ],
  declarations: [DetallepokemonPage]
})
export class DetallepokemonPageModule {}
