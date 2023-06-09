import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ConvertationComponent } from './components/convertation/convertation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    ConvertationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
