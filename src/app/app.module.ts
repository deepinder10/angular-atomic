import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './components/atoms/input/input.component';
import { TextComponent } from './components/atoms/text/text.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { FooterComponent } from './components/molecules/footer/footer.component';
import { ImageCardComponent } from './components/molecules/image-card/image-card.component';
import { BannerComponent } from './components/organisms/banner/banner.component';
import { MapViewComponent } from './components/organisms/map-view/map-view.component';
import { TestimonialsComponent } from './components/organisms/testimonials/testimonials.component';
import { TestimonialCardComponent } from './components/molecules/testimonial-card/testimonial-card.component';
import { HomeComponent } from './components/templates/home/home.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HyperlinkComponent } from './components/atoms/hyperlink/hyperlink.component';
import { ContactFormComponent } from './components/organisms/contact-form/contact-form.component';
import { ClientBubbleComponent } from './components/molecules/client-bubble/client-bubble.component';
import { LinksListComponent } from './components/molecules/links-list/links-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TextComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    ImageCardComponent,
    BannerComponent,
    MapViewComponent,
    TestimonialsComponent,
    TestimonialCardComponent,
    HomeComponent,
    LandingComponent,
    ButtonComponent,
    HyperlinkComponent,
    ContactFormComponent,
    ClientBubbleComponent,
    LinksListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
