import {Component, OnInit} from '@angular/core';
import {QuizHttpService} from 'src/app/services/question/quiz-http.service';
import {IQuiz} from '../../../models/quiz.model';
import {animate, state, style, transition, trigger} from '@angular/animations'; //
import {QuestionHttpService} from 'src/app/services/question/question-http.service';
import {IQuestion} from 'src/app/models/question.model';

@Component({
  selector: 'app-admin-all-quiz',
  templateUrl: './admin-all-quiz.component.html',
  styleUrls: ['./admin-all-quiz.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminAllQuizComponent implements OnInit {
  listQuiz: IQuiz[];
  quizQuestion;
  questionTitle = [];
  questionsTitles = [];
  columnsToDisplay = ['carriage', 'title', 'description', 'button'];


  constructor(private quizService: QuizHttpService, private questionService: QuestionHttpService) {
  }

  ngOnInit() {
    this.loadAllQuiz();
  }

  deleteById(id) {
    this.quizService.delete(id)
      .subscribe(
        () => this.loadAllQuiz()
      );

  }

  loadAllQuiz() {
    this.quizService.getAll()
      .subscribe((results: IQuiz[]) => {
        this.listQuiz = results;
      });
  }

  questionById(array) {
    console.log(array);
    let questionRowId;
    if (array === null) {
      this.questionsTitles = ['Нет вопросов'];
    } else {
      for (let i = 0; i < array.length; i++) {
        questionRowId = array[i];
        this.loadQuestionById(questionRowId);
      }
      console.log(this.questionsTitles);
      this.questionsTitles = [];
    }
  }


  private loadQuestionById(questionId: string) {
    this.questionService.getByParam<IQuestion>(questionId)
      .subscribe((result) => {
        this.quizQuestion = result.question;
        this.questionsTitles.push(this.quizQuestion);
      });
  }

}
