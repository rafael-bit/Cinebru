import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FilmeComponent } from './pages/filmes/filmes.component';
import { IngressoComponent } from './pages/ingresso/ingresso.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { FilmeDetalhesComponent } from './pages/filme-detalhes/filme-detalhes.component';
import { FilmeDetalhesModule } from './pages/filme-detalhes/filme-detalhes.module';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'filmes', component: FilmeComponent },
  { path: 'filme-detalhes/:id', component: FilmeDetalhesComponent },
  { path: 'ingresso', component: IngressoComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
