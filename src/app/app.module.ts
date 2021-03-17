import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { RecursoModule } from './recurso/recurso.module';
import { RecursoService } from './recurso.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaService } from './empresa.service';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';
import { OrdemServicoService } from './ordem-servico.service';
import { ProjetoModule } from './projeto/projeto.module';
import { ProjetoService } from './projeto.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService} from './auth.service';
import { TokenInterceptor} from './token.interceptor'
import {Recurso} from './recurso/recurso';
import {UsuarioModule} from './usuario/usuario.module';
import {UsuarioService} from './usuario.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

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
    RecursoModule,
    EmpresaModule,
    RouterModule,
    OrdemServicoModule,
    UsuarioModule,
    ProjetoModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
  ],
  providers: [
    ClientesService,
    RecursoService,
    EmpresaService,
    OrdemServicoService,
    ProjetoService,
    UsuarioService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
