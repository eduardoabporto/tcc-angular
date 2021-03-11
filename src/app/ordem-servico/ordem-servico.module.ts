import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemServicoRoutingModule } from './ordem-servico-routing.module';
import { OrdemServicoFormComponent } from './ordem-servico-form/ordem-servico-form.component';
import { OrdemServicoListaComponent } from './ordem-servico-lista/ordem-servico-lista.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdemServicoFormComponent, OrdemServicoListaComponent],
  imports: [
    CommonModule,
    OrdemServicoRoutingModule,
    RouterModule,
    FormsModule
  ], exports: [OrdemServicoFormComponent, OrdemServicoListaComponent]
})
export class OrdemServicoModule { }
