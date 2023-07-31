import { Injectable } from '@angular/core';
import { Product } from '../Types/product.type';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly apiUrl = environment.apiURL;

  api = axios.create({ baseURL: this.apiUrl });

  async getAllProducts(): Promise<Product[]> {
    const { data } = await this.api.get('/products');
    return data ?? [];
  }

  constructor() {}
}
