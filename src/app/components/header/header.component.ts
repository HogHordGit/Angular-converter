import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { CurrencyInterface } from 'src/app/shared/types/currency.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  usd_currencya!: number;
  euro_currency!: number;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.readData().subscribe((data: any) => {
      data.forEach((obj: CurrencyInterface) => {
        if (obj.cc && obj.cc == "USD") this.usd_currencya = obj.rate;
        if (obj.cc && obj.cc == "EUR") this.euro_currency = obj.rate;
      });
    });
  }

}
