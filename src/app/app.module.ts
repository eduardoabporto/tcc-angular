import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';
import { OrdemServicoService } from './ordem-servico.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TemplateModule,
    AppRoutingModule,
    ClientesModule,
    RouterModule,
    OrdemServicoModule
  ],
  providers: [
    ClientesService,
    OrdemServicoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
