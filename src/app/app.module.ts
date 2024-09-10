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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
