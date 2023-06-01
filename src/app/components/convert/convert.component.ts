import { HttpService } from 'src/app/shared/services/http.service';
import { Component, OnInit } from '@angular/core';
import { CURRMOCKDATA } from '../../mock/cur-values.mock';
import { CurValues } from 'src/app/shared/types/cur-values.interface';
import { CurrencyInterface } from 'src/app/shared/types/currency.interface';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  
  constructor(private http: HttpService) { }

  displayValues: CurValues[] = CURRMOCKDATA;

  currency_1: string = 'UAH';
  currency_2: string = 'USD';
  currencyValue_1: number = 0;
  currencyValue_2: number = 0;

  currencyRates: any = {};

  convertCurrency(conversinType: string) {
    if (conversinType === 'first-input') {
      const key = `${this.currency_1}-${this.currency_2}`;

      if (this.currencyRates.hasOwnProperty(key)) {
        this.currencyValue_2 = Number((this.currencyValue_1 * this.currencyRates[key]).toFixed(2));
      }
    } else if (conversinType === 'second-input') {
        const key = `${this.currency_1}-${this.currency_2}`;

        if (this.currencyRates.hasOwnProperty(key)) {
          this.currencyValue_1 = Number((this.currencyValue_2 * this.currencyRates[key]).toFixed(2));
        }
    }
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.readData().subscribe((data: any) => {
      let usd_currency = 0;
      let euro_currency = 0;

      data.forEach((obj: CurrencyInterface) => {
        if (obj.cc && obj.cc == "USD") usd_currency = obj.rate;
        if (obj.cc && obj.cc == "EUR") euro_currency = obj.rate;
      });

      this.currencyRates["UAH-USD"] = 1 / usd_currency;
      this.currencyRates["UAH-EUR"] = 1 / euro_currency;
      this.currencyRates["USD-UAH"] = usd_currency;
      this.currencyRates["USD-EUR"] = euro_currency / usd_currency;
      this.currencyRates["EUR-UAH"] = euro_currency;
      this.currencyRates["EUR-USD"] = usd_currency / euro_currency;
      this.currencyRates["UAH-UAH"] = 1;
      this.currencyRates["USD-USD"] = 1;
      this.currencyRates["EUR-EUR"] = 1;
    });
  }
}
