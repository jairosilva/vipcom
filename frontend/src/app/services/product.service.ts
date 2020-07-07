import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  AsyncSubject,
  Subscription,
  Observable,
  BehaviorSubject,
  Subject,
} from 'rxjs';

import { Product } from '../model/Product.model';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/products/upload';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  public enviouArquivoJson = new Subject();

  constructor(private http: HttpClient) {}

    getProducts() {
    return this.http.get<Product[]>(
      'http://localhost:8080/products');
  }

  updateProduct(data: Product) {
    const http$ = this.http.put('http://localhost:8080/products/' + data.id, data);

    http$.subscribe(
      (res) => console.log('HTTP response', res),
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  deleteProduct(id: number) {
    return this.http.delete('http://localhost:8080/products/' + id);
  }




}
