import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from 'src/app/Types';
import { Product } from 'src/app/Types';

@Pipe({ name: 'filterProducts', standalone: true })
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[] | null, filters: Filters) {
    const term = (filters.search ?? '').toLowerCase();

    const filteredProducts = products?.filter((product) => {
      return (
        product.description.toLowerCase().includes(term) ||
        product.longDescription.toLowerCase().includes(term)
      );
    });
    return filteredProducts;
  }
}
