import { Artigo } from './../models/placeholder.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  public getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getPost(id: string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
