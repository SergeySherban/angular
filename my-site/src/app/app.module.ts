import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { AboutUsComponent } from './components/main-container/about-us/about-us.component';
import { FeaturesComponent } from './components/main-container/features/features.component';
import { BenefitsComponent } from './components/main-container/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainContainerComponent,
    AboutUsComponent,
    FeaturesComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
