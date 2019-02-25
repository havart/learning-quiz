import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
// import { AdminNavComponent } from 'src/app/components/smart/admin-nav/admin-nav.component';
// import { AdminQuestionFormComponent } from 'src/app/components/smart/admin-question-form/admin-question-form.component';
// import { AdminQuizFormComponent } from 'src/app/components/smart/admin-quiz-form/admin-quiz-form.component';
// import { AdminMainComponent } from 'src/app/components/dumb/admin-main/admin-main.component';
// import { AdminAllQuestionsComponent } from 'src/app/components/smart/admin-all-questions/admin-all-questions.component';
// import { AdminAllQuizComponent } from 'src/app/components/smart/admin-all-quiz/admin-all-quiz.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
     AdminComponent,
    // AdminQuestionFormComponent,
    // AdminQuizFormComponent,
    // AdminNavComponent,
    // AdminMainComponent,
    // AdminAllQuestionsComponent,
    // AdminAllQuizComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule
  ],
})
export class AdminModule { }