import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AdminAllQuestionsComponent} from './components/smart/admin-all-questions/admin-all-questions.component';
// import { AdminAllQuizComponent } from './components/smart/admin-all-quiz/admin-all-quiz.component';
// import {AdminMainComponent} from './components/dumb/admin-main/admin-main.component';
// import {AdminQuestionFormComponent} from './components/smart/admin-question-form/admin-question-form.component';
// import {AdminQuizFormComponent} from './components/smart/admin-quiz-form/admin-quiz-form.component';
import {MainComponent} from './pages/client/main/main.component';
import {ResultComponent} from './pages/client/result/result.component';
import {TestComponent} from './pages/client/test/test.component';
import {LoginFormComponent} from './pages/login/login-form.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'src/app/pages/admin/admin.module#AdminModule'
  },
  // {
  //   path: 'admin',
  //   component: AdminMainComponent,
  // },
  //  {
  //   path: 'admin/questions',
  //   component: AdminAllQuestionsComponent,
  // },
  // {
  //   path: 'admin/questions/new',
  //   component: AdminQuestionFormComponent,
  // },
  // {
  //   path: 'admin/questions/:id',
  //   component: AdminQuestionFormComponent,
  // },
  // {
  //   path: 'admin/quizzes',
  //   component: AdminAllQuizComponent,
  // },
  // {
  //   path: 'admin/quiz/new',
  //   component: AdminQuizFormComponent,
  // },
  // {
  //   path: 'admin/quiz/:id',
  //   component: AdminQuizFormComponent,
  // },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'test/:id',
    component: TestComponent,
  },
  {
    path: 'result/:id',
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
