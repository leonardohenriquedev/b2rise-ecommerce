import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CurrencyHelper {
  formatToBRL(value: number) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
