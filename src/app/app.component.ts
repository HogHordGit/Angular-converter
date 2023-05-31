import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }
  
  public getData() {
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json').subscribe(data => {
      console.log(data);
      this.getJsonValue = data;
    });
  }
}
