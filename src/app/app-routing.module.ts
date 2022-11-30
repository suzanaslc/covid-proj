import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoPostComponent } from '../app/components/novo-post/novo-post.component';
import { AbrirPostComponent } from './components/abrir-post/abrir-post.component';
import { ListarPostsComponent } from './components/listar-posts/listar-posts.component';

const routes: Routes = [
  { path: 'novo-post', component: NovoPostComponent },
  { path: 'listar-post', component: ListarPostsComponent },
  { path: 'abrir-post/:post-id', component: AbrirPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }