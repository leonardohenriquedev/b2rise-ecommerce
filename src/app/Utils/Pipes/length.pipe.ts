import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/Types';

@Pipe({ name: 'length', standalone: true })
export class LengthPipe implements PipeTransform {
  transform(products: Product[] | undefined) {
    return products?.length;
  }
}
