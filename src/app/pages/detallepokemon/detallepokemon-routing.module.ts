import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallepokemonPage } from './detallepokemon.page';

const routes: Routes = [
  {
    path: '',
    component: DetallepokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallepokemonPageRoutingModule {}
