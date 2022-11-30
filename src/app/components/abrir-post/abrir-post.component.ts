import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../../services/post.service';
import { Artigo } from './../../models/placeholder.models';


@Component({
  selector: 'app-abrir-post',
  templateUrl: './abrir-post.component.html',
  styleUrls: ['./abrir-post.component.css']
})
export class AbrirPostComponent implements OnInit {
  id: string
  artigo: Artigo
  erro: any;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('post-id')
    this.getter();
  }

  getter () {
    this.postService.getPost(this.id).subscribe(
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
