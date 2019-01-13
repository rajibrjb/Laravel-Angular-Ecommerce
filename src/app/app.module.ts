import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMiddleComponent } from './components/header/header-middle/header-middle.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderShippingAreaComponent } from './components/header/header-shipping-area/header-shipping-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { StaticAreaComponent } from './components/static-area/static-area.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HeaderComponent,
      HeaderMiddleComponent,
      HeaderTopComponent,
      HeaderShippingAreaComponent,
      FooterComponent,
      ProductShowcaseComponent,
      StaticAreaComponent,
      NewsLetterComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
