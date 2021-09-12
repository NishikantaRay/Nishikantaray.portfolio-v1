import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { AchievementsComponent } from './home/achievements/achievements.component';
import { BlogComponent } from './home/blog/blog.component';
import { EducationComponent } from './home/education/education.component';
import { HeaderComponent } from './home/header/header.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ResumeComponent } from './home/resume/resume.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { YoutubeComponent } from './home/youtube/youtube.component';

const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'workExp', component: WorkExperienceComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'home', component: HeaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
