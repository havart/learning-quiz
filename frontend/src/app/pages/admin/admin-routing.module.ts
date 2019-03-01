import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent } from 'src/app/components/dumb/admin-main/admin-main.component';
import { AdminAllQuestionsComponent } from 'src/app/components/smart/admin-all-questions/admin-all-questions.component';
import { AdminQuestionFormComponent } from 'src/app/components/smart/admin-question-form/admin-question-form.component';
import { AdminAllQuizComponent } from 'src/app/components/smart/admin-all-quiz/admin-all-quiz.component';
import { AdminQuizFormComponent } from 'src/app/components/smart/admin-quiz-form/admin-quiz-form.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'questions',
    component: AdminAllQuestionsComponent
  },
  {
    path: 'main',
    component: AdminMainComponent
  },
  {
    path: 'questions/new',
    component: AdminQuestionFormComponent
  },
  {
    path: 'questions/:id',
    component: AdminQuestionFormComponent
  },
  {
    path: 'quizzes',
    component: AdminAllQuizComponent
  },
  {
    path: 'quiz/new',
    component: AdminQuizFormComponent
  },
  {
    path: 'quiz/:id',
    component: AdminQuizFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
