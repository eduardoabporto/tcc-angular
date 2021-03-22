import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DespesaFormComponent } from './despesa-form/despesa-form.component';
import { DespesaListaComponent } from './despesa-lista/despesa-lista.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';
import {DespesaRoutingModule} from './despesa-routing.module';


@NgModule({
  declarations: [DespesaFormComponent, DespesaListaComponent],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ReactiveFormsModule
  ], exports: [DespesaFormComponent, DespesaListaComponent]
})
export class DespesaModule { }
