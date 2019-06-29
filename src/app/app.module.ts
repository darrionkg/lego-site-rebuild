import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageContentComponent } from './main-home-component/main-page-content/main-page-content.component';
import { FooterContentComponent } from './main-home-component/footer-content/footer-content.component';
import { IndexComponent } from './main-home-component/index/index.component';
import { ImageSliderComponent } from './main-home-component/image-slider/image-slider.component';
import { ShopComponent } from './shop/shop.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageContentComponent,
    FooterContentComponent,
    IndexComponent,
    ImageSliderComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
