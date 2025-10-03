import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Summary } from './summary/summary';
import { Resume } from './resume/resume';
import { Family } from './family/family';
import { Background } from './background/background';
import { Authorization } from './authorization/authorization';
import { Salary } from './salary/salary';
import { Contact } from './contact/contact';
import { About } from './about/about';


export const routes: Routes = [
    {path: '', component: Summary },
    {path: 'About', component: About },
    {path: 'Summary', component: Summary },
    {path: 'Resume', component: Resume },
    {path: 'Family', component: Family },
    {path: 'Background', component: Background},
    {path: 'Authorization', component: Authorization},
    {path: 'Salary', component: Salary},
    {path: 'Contact', component: Contact},
    {path: '**', component: Summary}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
