import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ToastrModule } from 'ngx-toastr';

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
import { CareerCardComponent } from './components/career-card/career-card.component';
import { CareerComponent } from './components/career/career.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { StatistiqueItemComponent } from './components/statistique-item/statistique-item.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { OutsideClickDirective } from './directives/outside-click-directive.directive';
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
    CareerComponent,
    CareerCardComponent,
    StatistiquesComponent,
    StatistiqueItemComponent,
    MenuHeaderComponent,
    OutsideClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmoothScrollModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
