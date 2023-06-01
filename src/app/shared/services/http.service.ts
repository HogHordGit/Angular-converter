import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url: string = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  search_usd: string = "USD";
  search_euro: string = "EUR";

  constructor(private http: HttpClient) { }

  readData(): any {
    return this.http.get(url);
  }
}
