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
// import {AdminAllQuestionsComponent} from './components/smart/admin-all-questions/admin-all-questions.component';
// import {AdminAllQuizComponent} from './components/smart/admin-all-quiz/admin-all-quiz.component';
// import {AdminMainComponent} from './components/dumb/admin-main/admin-main.component';
// import {AdminNavComponent} from './components/smart/admin-nav/admin-nav.component';
// import {AdminQuestionFormComponent} from './components/smart/admin-question-form/admin-question-form.component';
// import {AdminQuizFormComponent} from './components/smart/admin-quiz-form/admin-quiz-form.component';
import {MainComponent} from './pages/client/main/main.component';
import {ResultComponent} from './pages/client/result/result.component';
import {TestComponent} from './pages/client/test/test.component';
import {LoginFormComponent} from './pages/login/login-form.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {BaseHttpService} from './services/base-http/base-http.service';
import {QuestionHttpService} from './services/question/question-http.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    TestComponent,
    ResultComponent,
    LoginFormComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatSortModule,
    MatAutocompleteModule,
    ReactiveFormsModule,

  ],
  providers: [BaseHttpService, QuestionHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
