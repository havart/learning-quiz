import { Component, OnInit} from '@angular/core';
import { IQuiz } from 'src/app/models/quiz.model';
import { QuizHttpService } from 'src/app/services/question/quiz-http.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listQuiz: IQuiz[];

  constructor(private quizService: QuizHttpService) {}

  ngOnInit() {
    this.loadAllQuiz();
  }

  loadAllQuiz() {
    this.quizService.getAll().subscribe((results: IQuiz[]) => {
      this.listQuiz = results;
    });
  }
}
