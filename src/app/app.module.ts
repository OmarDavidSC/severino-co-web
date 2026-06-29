
import { ComunModule } from '../app/shared/comun.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './shared/components/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModalDialog } from "./shared/components/modal/modal.component";
import { GridLoaderComponent } from "./shared/components/grid-loader/grid-loader.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AddTokenInterceptor } from './shared/components/authentication/add-token.interceptor';
import { HomeComponent } from './components/public/home/home.component';
import { HeroComponent } from './components/public/home/sections/hero/hero.component';
import { AboutComponent } from './components/public/home/sections/about/about.component';
import { ContactComponent } from './components/public/home/sections/contact/contact.component';
import { ServicesComponent } from './components/public/home/sections/services/services.component';
import { WhyChooseUsComponent } from './components/public/home/sections/why-choose-us/why-choose-us.component';
import { IndustriesComponent } from './components/public/home/sections/industries/industries.component';
import { ProcessComponent } from './components/public/home/sections/process/process.component';
import { StatisticsComponent } from './components/public/home/sections/statistics/statistics.component';
import { TeamComponent } from './components/public/home/sections/team/team.component';
import { TestimonialsComponent } from './components/public/home/sections/testimonials/testimonials.component';
import { FaqComponent } from './components/public/home/sections/faq/faq.component';
import { CtaComponent } from './components/public/home/sections/cta/cta.component';
import { WhatsappFloatComponent } from './components/public/home/sections/whatsapp-float/whatsapp-float.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    HeaderComponent,
    GridLoaderComponent,
    ModalDialog,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    IndustriesComponent,
    ProcessComponent,
    StatisticsComponent,
    TeamComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaComponent,
    WhatsappFloatComponent,
  ],
  imports: [
    ComunModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    ModalDialog,
    GridLoaderComponent,
    MenuLateralComponent,
    FontAwesomeModule,
    NgxSpinnerModule
  ],
  entryComponents: [
    ModalDialog
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFileExcel);
  }
}