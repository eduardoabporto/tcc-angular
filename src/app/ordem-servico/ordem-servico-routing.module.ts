import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { OrdemServicoFormComponent } from './ordem-servico-form/ordem-servico-form.component';
import { OrdemServicoListaComponent } from './ordem-servico-lista/ordem-servico-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';
import {ClientesFormComponent} from '../clientes/clientes-form/clientes-form.component';
import {OrdemServicoFormReadComponent} from './ordem-servico-form/ordem-servico-form-read.component';

const routes: Routes = [
  { path: 'ordem-servico', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form', component: OrdemServicoFormComponent},
      { path: 'form/:id' , component: OrdemServicoFormComponent},
      { path: 'form/read/', component: OrdemServicoFormReadComponent},
      { path: 'form/read/:id' , component: OrdemServicoFormReadComponent},
      { path: 'lista', component: OrdemServicoListaComponent},
      { path: '', redirectTo: '/ordem-servico/lista', pathMatch: 'full'}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemServicoRoutingModule { }
