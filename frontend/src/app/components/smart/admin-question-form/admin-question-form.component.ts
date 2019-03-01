import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionHttpService } from 'src/app/services/question/question-http.service';
import { IQuestion, QUESTION_CATEGORIES } from '../../../models/question.model';

@Component({
  selector: 'app-admin-question-form',
  templateUrl: './admin-question-form.component.html',
  styleUrls: ['./admin-question-form.component.css']
})
export class AdminQuestionFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  QUESTION_CATEGORIES = QUESTION_CATEGORIES;
  questionId: string;

  constructor(
    private questionService: QuestionHttpService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.questionId = this.activatedRoute.snapshot.params['id'];
    this.initForm();
    if (this.questionId) {
      this.loadQuestionById(this.questionId);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      let request;
      if (this.questionId) {
        request = this.questionService.update(this.questionId, this.form.value);
      } else {
        request = this.questionService.add(this.form.value);
      }

      request.subscribe(
        () => {
          this.router.navigate(['admin', 'questions']);
        },
        error => {
          console.log('error', error);
        }
      );
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      question: [null, [Validators.required, Validators.minLength(10)]],
      category: [null, [Validators.required, Validators.minLength(5)]],
      answer1: [null],
      answer2: [null],
      answer3: [null],
      answer4: [null]
    });
  }

  private loadQuestionById(questionId: string) {
    this.questionService
      .getByParam<IQuestion>(questionId)
      .subscribe(question => this.fillFormWithQuestion(question));
  }

  private fillFormWithQuestion(question: IQuestion) {
    this.form.patchValue(question);
  }
}
