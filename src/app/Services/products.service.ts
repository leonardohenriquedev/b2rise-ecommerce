import { Injectable, inject } from '@angular/core';
import { Product } from '../Types/';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly apiUrl = environment.apiURL;
  http: HttpClient = inject(HttpClient);

  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }
}
