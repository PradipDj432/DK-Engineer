import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ModualModule } from './modual/modual.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSectionComponentComponent } from './component/login-section-component/login-section-component.component';
import { AuthoritySectionComponent } from './component/authority-section/authority-section.component';
import { ServicesComponent } from './component/services/services.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutCtnComponent } from './component/about-ctn/about-ctn.component';
import { AboutBannerSectionComponent } from './component/about-banner-section/about-banner-section.component';
import { MrnPageComponent } from './component/mrn-page/mrn-page.component';
import { MrnLoginComponent } from './component/mrn-login/mrn-login.component';
import { ForgotPassowrdComponent } from './component/forgot-passowrd/forgot-passowrd.component';
import { MrnRegistrationComponent } from './component/mrn-registration/mrn-registration.component';
import { ShipperPageComponent } from './component/shipper-page/shipper-page.component';
import { ComonComponentComponent } from './component/comon-component/comon-component.component';
import { ProductComponent } from './component/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginSectionComponentComponent,
    AuthoritySectionComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    AboutCtnComponent,
    AboutBannerSectionComponent,
    MrnPageComponent,
    MrnLoginComponent,
    ForgotPassowrdComponent,
    MrnRegistrationComponent,
    ShipperPageComponent,
    ComonComponentComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModualModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
