import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageContentComponent } from './main-home-component/main-page-content/main-page-content.component';
import { FooterContentComponent } from './main-home-component/footer-content/footer-content.component';
import { IndexComponent } from './main-home-component/index/index.component';
import { ImageSliderComponent } from './main-home-component/image-slider/image-slider.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageContentComponent,
    FooterContentComponent,
    IndexComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
