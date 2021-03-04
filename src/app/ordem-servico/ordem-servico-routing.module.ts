import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdemServicoFormComponent} from './ordem-servico-form/ordem-servico-form.component';
import {OrdemServicoListaComponent} from './ordem-servico-lista/ordem-servico-lista.component';

const routes: Routes = [
  { path: 'ordem-servico-form', component: OrdemServicoFormComponent},
  { path: 'ordem-servico-listagem', component: OrdemServicoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemServicoRoutingModule { }
