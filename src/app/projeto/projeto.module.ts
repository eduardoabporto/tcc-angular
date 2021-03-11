import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoListaComponent } from './projeto-lista/projeto-lista.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProjetoFormComponent, ProjetoListaComponent],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    RouterModule,
    FormsModule
  ], exports: [ProjetoFormComponent, ProjetoListaComponent]
})
export class ProjetoModule { }
