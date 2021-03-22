import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TipoDespesaRoutingModule } from './tipo-despesa-routing.module';
import { TipoDespesaFormComponent } from './tipo-despesa-form/tipo-despesa-form.component';
import { TipoDespesaListaComponent } from './tipo-despesa-lista/tipo-despesa-lista.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    TipoDespesaFormComponent,
    TipoDespesaListaComponent
  ],
  imports: [
    CommonModule,
    TipoDespesaRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ], exports: [
    TipoDespesaFormComponent,
    TipoDespesaListaComponent
  ]
})
export class TipoDespesaModule { }
