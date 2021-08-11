import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactusPageComponent } from './home/contactus-page/contactus-page.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { EducationComponent } from './home/education/education.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { AchievementsComponent } from './home/achievements/achievements.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ResumeComponent } from './home/resume/resume.component';
import { HobbyComponent } from './home/hobby/hobby.component';
import { GithubpagesComponent } from './home/githubpages/githubpages.component';
import { SkillComponent } from './home/skill/skill.component';
import { HackathonComponent } from './home/hackathon/hackathon.component';
import { OpensourceComponent } from './home/opensource/opensource.component';
import { SwagsComponent } from './home/swags/swags.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ContactusPageComponent,
    AboutmeComponent,
    EducationComponent,
    WorkExperienceComponent,
    AchievementsComponent,
    ProjectsComponent,
    ResumeComponent,
    HobbyComponent,
    GithubpagesComponent,
    SkillComponent,
    HackathonComponent,
    OpensourceComponent,
    SwagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
