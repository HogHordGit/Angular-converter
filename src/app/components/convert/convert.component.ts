import { Component } from '@angular/core';
import { CURR } from '../mock/cur-values.mock';
import { CurValues } from 'src/app/shared/types/cur-values.interface';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
  
  displayValues: CurValues[] = CURR;

  currency1: string = 'UAH';
  currency2: string = 'USD';
  currency1Value: number = 0;
  currency2Value: number = 0;

  currencyRates: any = {
    'UAH-USD': 27, // Примерный курс гривны к доллару
    'UAH-EUR': 31, // Примерный курс гривны к евро
    'USD-UAH': 1 / 27, // Обратный курс доллара к гривне
    'USD-EUR': 1 / 31, // Примерный курс доллара к евро
    'EUR-UAH': 1 / 31, // Обратный курс евро к гривне
    'EUR-USD': 1 / 31 // Обратный курс евро к доллару
  };

  convertCurrency(conversionType: string) {
    if (conversionType === '1') {
      const rateKey = `${this.currency1}-${this.currency2}`;
      if (this.currencyRates.hasOwnProperty(rateKey)) {
        this.currency2Value = this.currency1Value * this.currencyRates[rateKey];
      }
    } else if (conversionType === '2') {
      const rateKey = `${this.currency2}-${this.currency1}`;
      if (this.currencyRates.hasOwnProperty(rateKey)) {
        this.currency1Value = this.currency2Value * this.currencyRates[rateKey];
      }
    }
  }
}
