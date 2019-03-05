import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/client/main/main.component';
import { ResultComponent } from './pages/client/result/result.component';
import { TestComponent } from './pages/client/test/test.component';
import { LoginFormComponent } from './pages/login/login-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BaseHttpService } from './services/base-http/base-http.service';
import { QuestionHttpService } from './services/question/question-http.service';
import { CategoryComponent } from './components/dumb/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    TestComponent,
    ResultComponent,
    LoginFormComponent,
    CategoryComponent
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
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [BaseHttpService, QuestionHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
