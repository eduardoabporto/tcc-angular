import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    EmpresaFormComponent,
    EmpresaListaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ], exports: [
    EmpresaFormComponent,
    EmpresaListaComponent
  ]
})
export class EmpresaModule { }
