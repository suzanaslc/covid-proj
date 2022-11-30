import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HeaderComponent } from './components/header/header.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { CategoriasMobileComponent } from './components/categorias-mobile/categorias-mobile.component';
import { PesquisarMobileComponent } from './components/pesquisar-mobile/pesquisar-mobile.component';
import { AppRoutingModule } from './app-routing.module';
import { NovoPostComponent } from './components/novo-post/novo-post.component';
import { AbrirPostComponent } from './components/abrir-post/abrir-post.component';
import { ListarPostsComponent } from './components/listar-posts/listar-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    HeaderComponent,
    PesquisarComponent,
    ArtigoComponent,
    CategoriasMobileComponent,
    PesquisarMobileComponent,
    NovoPostComponent,
    AbrirPostComponent,
    ListarPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
