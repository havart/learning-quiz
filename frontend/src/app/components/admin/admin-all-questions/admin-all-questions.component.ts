import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {QuestionHttpService} from 'src/app/services/question/question-http.service';
import {IQuestion, QUESTION_CATEGORIES} from '../../../models/question.model';
import {AdminAllQuestionsDataSource} from './admin-all-questions-datasource';

@Component({
  selector: 'app-admin-all-questions',
  templateUrl: './admin-all-questions.component.html',
  styleUrls: ['./admin-all-questions.component.css'],
})
export class AdminAllQuestionsComponent implements OnInit {
  listQuestions: IQuestion[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AdminAllQuestionsDataSource;
  displayedColumns = ['question', 'category', 'button'];
  QUESTION_CATEGORIES = QUESTION_CATEGORIES;

  constructor(private questionService: QuestionHttpService) {
  }

  ngOnInit() {
    this.loadAllQuestions();
  }

  deleteById(id) {
    this.questionService.delete(id)
      .subscribe(
        () => this.loadAllQuestions(),
      );
  }

  loadAllQuestions() {
    this.questionService.getAll()
      .subscribe((results: IQuestion[]) => {
        this.listQuestions = results;
      }, (err) => console.log('err' + err));
    this.dataSource = new AdminAllQuestionsDataSource(this.paginator, this.sort);
  }

  getCategoryTitle(categoryId: number): string {
    const category = QUESTION_CATEGORIES.find(el => (el.key === categoryId));

    return category ? category.title : '-';
  }
}
