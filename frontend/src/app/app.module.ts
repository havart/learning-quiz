import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatAutocompleteModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminAllQuestionsComponent} from './components/admin/admin-all-questions/admin-all-questions.component';
import {AdminMainComponent} from './components/admin/admin-main/admin-main.component';
import {AdminNavComponent} from './components/admin/admin-nav/admin-nav.component';
import {AdminQuestionFormComponent} from './components/admin/admin-question-form/admin-question-form.component';
import {AdminQuizFormComponent} from './components/admin/admin-quiz-form/admin-quiz-form.component';
import {MainComponent} from './components/client/main/main.component';
import {ResultComponent} from './components/client/result/result.component';
import {TestComponent} from './components/client/test/test.component';
import {LoginFormComponent} from './components/login/login-form.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {BaseHttpService} from './services/base-http/base-http.service';
import {QuestionHttpService} from './services/question/question-http.service';
import { AdminAllQuizComponent } from './components/admin/admin-all-quiz/admin-all-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminQuestionFormComponent,
    AdminQuizFormComponent,
    AdminNavComponent,
    AdminMainComponent,
    AdminAllQuestionsComponent,
    PageNotFoundComponent,
    MainComponent,
    TestComponent,
    ResultComponent,
    LoginFormComponent,
    AdminAllQuizComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule,
    MatAutocompleteModule,

  ],
  providers: [BaseHttpService, QuestionHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
