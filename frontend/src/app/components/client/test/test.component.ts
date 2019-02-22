import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IQuestion} from '../../../models/question.model';
import {QuestionHttpService} from '../../../services/question/question-http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  currentCategory: number;
  questionsSortedByCategory: IQuestion [] = [];
  questionIndex = 0;
  questionsAmount = 1;
  buttonValue = 'Следующий вопрос';

  // userAnswers = [];

  constructor(
    private questionService: QuestionHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.currentCategory = this.activatedRoute.snapshot.params['category'];
    this.loadQuestionByCategory();
  }

  loadQuestionByCategory() {
    this.questionService.getByParam(this.currentCategory).subscribe(
      (results: IQuestion[]) => {
        this.questionsSortedByCategory = results;
        console.log(this.questionsSortedByCategory);
        this.questionsAmount = this.questionsSortedByCategory.length;
      },
      error => {
        console.log('error', error);
      },
    );
  }

  nextQuestion() {
    this.questionIndex++;
    if (this.questionIndex === this.questionsAmount - 1) {
      this.buttonValue = 'Завершить тест';
      this.router.navigate(['result']);
    }
  }

  // selectAswer(answer, id) {
  //   this.userAnswers.push({answer, id});
  //   console.log(this.userAnswers);
  // }

}
