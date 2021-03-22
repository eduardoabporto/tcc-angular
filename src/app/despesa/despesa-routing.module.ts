import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';
import {DespesaListaComponent} from './despesa-lista/despesa-lista.component';
import {DespesaFormComponent} from './despesa-form/despesa-form.component';


const routes: Routes = [
  { path: 'despesa', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form', component: DespesaFormComponent},
      { path: 'form/:id' , component: DespesaFormComponent},
      { path: 'lista', component: DespesaListaComponent},
      { path: '', redirectTo: '/despesa/lista', pathMatch: 'full'}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaRoutingModule { }
