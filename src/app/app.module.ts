import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';

export function initializeApp(configService: ConfigService) {
  return () => {
    const baseUrl = 'http://115.243.153.202/pams/public/api/'; // Set your base URL here
    configService.setBaseUrl(baseUrl);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      ConfigService,
      {
        provide:APP_INITIALIZER,
        useFactory:initializeApp,
        deps:[ConfigService],
        multi:true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
