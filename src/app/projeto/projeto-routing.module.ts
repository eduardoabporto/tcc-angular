import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoListaComponent } from './projeto-lista/projeto-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';


const routes: Routes = [
  { path: 'projeto', component: LayoutComponent, canActivate:[AuthGuard], children: [
      { path: 'form', component: ProjetoFormComponent},
      { path: 'form/:id' , component: ProjetoFormComponent},
      { path: 'lista', component: ProjetoListaComponent},
      { path: '', redirectTo: '/projeto/lista', pathMatch: 'full'}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
