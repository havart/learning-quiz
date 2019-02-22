import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminAllQuestionsComponent} from './components/admin/admin-all-questions/admin-all-questions.component';
import {AdminMainComponent} from './components/admin/admin-main/admin-main.component';
import {AdminQuestionFormComponent} from './components/admin/admin-question-form/admin-question-form.component';
import {AdminQuizFormComponent} from './components/admin/admin-quiz-form/admin-quiz-form.component';
import {MainComponent} from './components/client/main/main.component';
import {ResultComponent} from './components/client/result/result.component';
import {TestComponent} from './components/client/test/test.component';
import {LoginFormComponent} from './components/login/login-form.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { AdminAllQuizComponent } from './components/admin/admin-all-quiz/admin-all-quiz.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminMainComponent,
  },
  {
    path: 'admin/questions',
    component: AdminAllQuestionsComponent,
  },
  {
    path: 'admin/questions/new',
    component: AdminQuestionFormComponent,
  },
  {
    path: 'admin/questions/:id',
    component: AdminQuestionFormComponent,
  },
  {
    path: 'admin/quizzes',
    component: AdminAllQuizComponent,
  },
  {
    path: 'admin/quiz/new',
    component: AdminQuizFormComponent,
  },
  {
    path: 'admin/quiz/:id',
    component: AdminQuizFormComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'test/:category',
    component: TestComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true},
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
