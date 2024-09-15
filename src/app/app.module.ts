import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { IconsLinkComponent } from './components/icons-link/icons-link.component';
import { DecorationComponent } from './components/decoration/decoration.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { MyExpertisesComponent } from './components/my-expertises/my-expertises.component';
import { CardExpertiseComponent } from './components/card-expertise/card-expertise.component';
import { CustomTitleComponent } from './components/custom-title/custom-title.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    IconsLinkComponent,
    DecorationComponent,
    SkillsSectionComponent,
    ProjectComponent,
    ProjectsSectionComponent,
    MyExpertisesComponent,
    CardExpertiseComponent,
    CustomTitleComponent,
    SkillItemComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSmoothScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
