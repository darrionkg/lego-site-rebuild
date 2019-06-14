import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainShopComponent } from './main-shop/main-shop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainShopComponent,
    NavigationComponent,
    MainPageContentComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
