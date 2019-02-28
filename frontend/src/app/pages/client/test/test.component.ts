import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionHttpService } from '../../../services/question/question-http.service';
import { QuizHttpService } from 'src/app/services/question/quiz-http.service';
import { IQuestionAnswer } from 'src/app/models/answer.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  quizId: string;
  quizQuestionsById: any;
  answers: string[] = [];
  title: string;
  questionIndex = 0;
  buttonValue = 'Следующий вопрос';
  userAnswersArray: string[] = [];
  allAnswer = [];
  resultQuiz: IQuestionAnswer[] = [];
  currentQuestionId: string;
  myTextarea: string;

  constructor(
    private questionService: QuestionHttpService,
    private quizService: QuizHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.loadQuestionByQuizId();
  }

  loadQuestionByQuizId() {
    this.quizService.getByParam(this.quizId).subscribe(results => {
      this.quizQuestionsById = results['questionsArray'];
      this.loadQuestion(this.quizQuestionsById[0]);
    });
  }

  loadQuestion(currentQuestion) {
    this.questionService
      .getByParam(currentQuestion)
      .subscribe(
        result => (
          (this.answers = [
            ...this.answers,
            result['answer1'],
            result['answer2'],
            result['answer3'],
            result['answer4']
          ]),
          (this.title = result['question']),
          (this.currentQuestionId = currentQuestion)
        ),
        err => console.log('err ' + err)
      );
  }

  nextQuestion(event, textValue) {
    if (this.myTextarea !== '') {
      this.addAnswer(textValue);
    }
    if (this.isNotEmpty()) {
      this.questionIndex++;
      this.resultQuiz = [
        ...this.resultQuiz,
        {
          questionId: this.currentQuestionId,
          answers: this.userAnswersArray
        }
      ];
      this.loadQuestion(this.quizQuestionsById[this.questionIndex]);
      if (this.questionIndex === this.quizQuestionsById.length - 1) {
        this.buttonValue = 'Завершить тест';
      }
      if (this.questionIndex === this.quizQuestionsById.length) {
        this.router.navigate(['result', this.quizId]);
      }
      this.userAnswersArray = [];
      this.answers = [];
      this.myTextarea = '';
    }
  }

  isNotEmpty() {
    if (this.userAnswersArray.length > 0) {
      this.allAnswer = [...this.allAnswer, this.resultQuiz];
      return true;
    } else {
      alert('Ответь на вопрос!');
      return false;
    }
  }

  userTypeSelect(answer: string) {
    const answerExists = this.answerChecked(answer);
    this.userAnswersArray = this.userAnswersArray.filter(elem => {
      return elem !== answer;
    });
    answerExists ? this.userAnswersArray : this.addAnswer(answer);
  }

  answerChecked(answer: string): boolean {
    return this.userAnswersArray.includes(answer);
  }

  addAnswer(value: string): void {
    this.userAnswersArray = [...this.userAnswersArray, value];
  }
}
