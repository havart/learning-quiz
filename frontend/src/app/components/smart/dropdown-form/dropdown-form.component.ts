import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QUESTION_CATEGORIES, IQuestion } from '../../../models/question.model';

import { Observable } from 'rxjs';
import { QuestionHttpService } from 'src/app/services/question/question-http.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-dropdown-form',
    templateUrl: './dropdown-form.component.html',
    styleUrls: ['./dropdown-form.component.css'],
})
export class DropdownFormComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    QUESTION_CATEGORIES = QUESTION_CATEGORIES;
    listQuestions$: Observable<IQuestion[]>;
    filterAllQuestions: Array<any>;
    index: number;
    isSave = false;

    constructor(private formBuilder: FormBuilder, private questionService: QuestionHttpService) {}

    ngOnInit() {
        this.initForm();
        this.listQuestions$ = this.questionService.getAll();
    }
    private initForm() {
        this.form = this.formBuilder.group({
            category: [null, [Validators.required]],
            question: [null, [Validators.required, Validators.minLength(3)]],
            answer1: [null],
            answer2: [null],
            answer3: [null],
            answer4: [null],
        });
    }
    private loadQuestionById(questionId: string) {
        this.questionService.getByParam<IQuestion>(questionId).subscribe(question => this.form.patchValue(question));
    }
    cancel() {
        this.index = undefined;
        this.form = this.formBuilder.group({
            category: [null],
            question: [null],
            answer1: [null],
            answer2: [null],
            answer3: [null],
            answer4: [null],
        });
    }
    search(event) {
        this.listQuestions$
            .pipe(
                map(val =>
                    val.filter(prop => {
                        if (prop.question.toLowerCase().includes(event.target.value.toLowerCase()) 
                        && prop.category === this.form.value.category) {
                            return prop;
                        }
                        if (event.target.value === null && prop.category === this.form.value.category) {
                            return prop;
                        }
                    }),
                ),
            )
            .subscribe(val => (this.filterAllQuestions = val));
        if (this.form.value.question !== this.filterAllQuestions[i].question) {
            this.index = undefined;
        }
    }
    checkQuestion(i) {
        this.loadQuestionById(this.filterAllQuestions[i]._id);
        this.index = i;
    }
    updateQuestion() {
        if (this.index !== undefined) {
            this.questionService.update(this.filterAllQuestions[this.index]._id, this.form.value).subscribe();
            this.saved();
        }
    }
    saved() {
        this.isSave = true;
        setTimeout(() => {
            this.isSave = false;
        }, 1000);
    }
}
