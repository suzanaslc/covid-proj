import { Artigo } from './../../models/placeholder.models';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  artigo = new Artigo;    //variavel artigo do tipo artigo
  erro: any; //variavel erro 

  constructor(private postService: PostService) { 
    this.getter();
  }

  ngOnInit() {}
    getter () {
      this.postService.getPosts().subscribe(
        (data: Artigo) =>{
          this.artigo = data;
          // console.log('O data que recebemos', data);
          // console.log('A variavel que preenchemos', this.artigo);
      }, (error:any) => {
          this.erro = error;
          // console.error('ERROR: ', error);
      });
    }
  }
