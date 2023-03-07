import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { EducationComponent  } from './views/education/education.component';
import { SkillsComponent  } from './views/skills/skills.component';
import { ProjectComponent } from './views/project/project.component'
import { ContactComponent  } from './views/contact/contact.component';

const routes: Routes = [{path:'home',component: AppComponent},
                        {path:'about',component: AboutComponent},
                        {path:'education',component: EducationComponent},
                        {path:'skills',component: SkillsComponent},
                        {path:'project',component: ProjectComponent},
                        {path:'*contact',component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
