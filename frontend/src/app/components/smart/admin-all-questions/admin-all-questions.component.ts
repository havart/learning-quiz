import { Component, OnInit } from '@angular/core';
import { QuestionHttpService } from 'src/app/services/question/question-http.service';
import { IQuestion } from '../../../models/question.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-all-questions',
    templateUrl: './admin-all-questions.component.html',
    styleUrls: ['./admin-all-questions.component.css'],
})
export class AdminAllQuestionsComponent implements OnInit {
    listQuestions$: Observable<IQuestion[]>;
    constructor(private questionService: QuestionHttpService, private router: Router) {}

    ngOnInit() {
        this.loadAllQuestions();
    }
    doEvent(event, id) {
        event === 'edit' ? this.goEdit(id) : this.deleteById(id);
    }
    deleteById(id: string) {
        this.questionService.delete(id).subscribe(() => this.loadAllQuestions());
    }
    goEdit(id) {
        this.router.navigate(['/admin/questions', id]);
    }
    loadAllQuestions() {
        this.listQuestions$ = this.questionService.getAll();
    }
}
