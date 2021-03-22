import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDespesaFormComponent } from './tipo-despesa-form/tipo-despesa-form.component';
import { TipoDespesaListaComponent } from './tipo-despesa-lista/tipo-despesa-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';

const routes: Routes = [
  { path: 'tipo-despesa', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form' , component: TipoDespesaFormComponent},
      { path: 'form/:id' , component: TipoDespesaFormComponent},
      { path: 'lista', component: TipoDespesaListaComponent},
      { path: '', redirectTo: '/tipo-despesa/lista', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDespesaRoutingModule { }
