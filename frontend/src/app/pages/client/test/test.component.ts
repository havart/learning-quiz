import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionHttpService} from '../../../services/question/question-http.service';
import {QuizHttpService} from 'src/app/services/question/quiz-http.service';
import {IQuestionAnswer} from 'src/app/models/answer.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  quizId: string;
  quizQuestionsById: any;
  answers: Array<string> = [];
  title: string;
  questionIndex = 0;
  buttonValue = 'Следующий вопрос';
  answersArray: Array<string> = [];
  allAnswer = [];
  resultQuiz: IQuestionAnswer[] = [];
  currentQuestionId;
  myTextarea = '';

  constructor(
    private questionService: QuestionHttpService,
    private quizService: QuizHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.loadQuestionByQuizId();
  }

  loadQuestionByQuizId() {
    this.quizService.getByParam(this.quizId).subscribe(
      (results) => {
        this.quizQuestionsById = results['questionsArray'];
        this.loadQuestion(this.quizQuestionsById[0]);
      });
  }

  loadQuestion(currentQuestion) {
    this.questionService.getByParam(currentQuestion).subscribe(
      result => (
        this.answers.push(result['answer1'], result['answer2'], result['answer3'], result['answer4']),
          this.title = result['question'],
          this.currentQuestionId = currentQuestion
      ),
      err => console.log('err ' + err)
    );
  }

  nextQuestion(event, textValue) {

    if (this.myTextarea !== '') {
      this.userWriteText(textValue);
    }

    if (this.isNotEmpty()) {
      this.questionIndex++;

      this.resultQuiz.push({
        questionId: this.currentQuestionId,
        answers: this.answersArray
      });

      this.loadQuestion(this.quizQuestionsById[this.questionIndex]);
      if (this.questionIndex === (this.quizQuestionsById.length - 1)) {
        this.buttonValue = 'Завершить тест';
      }
      if (this.questionIndex === this.quizQuestionsById.length) {
        this.router.navigate(['result', this.quizId]);
      }

      this.answersArray = [];
      this.answers = [];
      this.myTextarea = '';
    }
  }

  isNotEmpty() {
    if (this.answersArray.length > 0) {
      this.allAnswer.push(this.resultQuiz);
      return true;
    } else {
      alert('Ответь на вопрос!');
      return false;
    }
  }

  userTypeSelect(event: Event, answer: string) {
    let flag = true;
    if (!this.answersArray.length) {
      this.answersArray.push(answer);
    } else {
      for (let i = 0; i < this.answersArray.length; ++i) {
        if (this.answersArray[i] === answer) {
          this.answersArray.splice(i, 1);
          flag = false;
        }
      }
      if (flag) {
        this.answersArray.push(answer);
      }
    }
    this.setColor(event);
  }

  setColor(event) {
    if (event.target.id === 'testAnswerFieldCheck') {
      event.target.id = `{{i}}`;
    } else {
      event.target.id = 'testAnswerFieldCheck';
    }
  }

  userWriteText(value: string): void {
    this.answersArray.push(`${value}`);
  }
}
