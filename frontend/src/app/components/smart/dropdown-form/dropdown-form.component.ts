import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QUESTION_CATEGORIES, IQuestion } from '../../../models/question.model';
import { Observable } from 'rxjs';
import { QuestionHttpService } from 'src/app/services/question/question-http.service';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { CallService, Call } from 'src/app/services/call/call.service';
@Component({
    selector: 'app-dropdown-form',
    templateUrl: './dropdown-form.component.html',
    styleUrls: ['./dropdown-form.component.css'],
})
export class DropdownFormComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    QUESTION_CATEGORIES = QUESTION_CATEGORIES;
    filterAllQuestions$: Observable<IQuestion[]>;
    currentCall$: Observable<Call>;
    id: string;
    isSave = false;
    close = false;

    constructor(
        private formBuilder: FormBuilder,
        private questionService: QuestionHttpService,
        private snackBar: MatSnackBar,
        private call: CallService,
    ) {}

    ngOnInit() {
        this.currentCall$ = this.call.getCurrentCall$().pipe(
            tap(() => {
                const questionValue = this.call.getCurrentQuestion();
                if (questionValue) {
                    this.form.patchValue(questionValue);
                    return;
                }
                this.initForm();
            }),
        );
    }
    isOpen() {
        this.close = !this.close;
    }
    private initForm() {
        this.id = undefined;
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
    cansel() {
        this.form.reset();
    }
    search() {
        this.filterAllQuestions$ = this.questionService
            .getAll<IQuestion>()
            .pipe(map(val => val.filter(({ category }: IQuestion) => category === this.form.value.category)));
    }
    checkQuestion(id) {
        this.loadQuestionById(id);
        this.id = id;
    }
    updateQuestion() {
        if (this.form.valid) {
            this.questionService.update(this.id, this.form.value).subscribe(() => this.openSnackBar());
        }
    }
    openSnackBar() {
        this.snackBar.openFromComponent(SavedFormComponent, {
            duration: 2000,
        });
    }
}
@Component({
    selector: 'app-saved-form',
    templateUrl: './saved.html',
    styles: [
        `
            .saved-form {
                color: white;
            }
        `,
    ],
})
export class SavedFormComponent {}
