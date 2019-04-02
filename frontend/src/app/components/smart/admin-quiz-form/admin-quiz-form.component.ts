import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuiz } from '../../../models/quiz.model';
import { QuizHttpService } from '../../../services/question/quiz-http.service';
import { IQuestion } from '../../../models/question.model';
import { QuestionHttpService } from '../../../services/question/question-http.service';

@Component({
    selector: 'app-admin-quiz-form',
    templateUrl: './admin-quiz-form.component.html',
    styleUrls: ['./admin-quiz-form.component.css'],
})
export class AdminQuizFormComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    quizId: string;
    listQuestions: IQuestion[];
    questionsTitlesArray: string[] = [];
    chooseQuestionId: string;
    chooseQuestionTitle: string;
    questionsIdArray: string[] = [];

    constructor(
        private quizService: QuizHttpService,
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private questionService: QuestionHttpService,
    ) {}

    ngOnInit() {
        this.quizId = this.activatedRoute.snapshot.params['id'];
        this.initForm();
        if (this.quizId) {
            this.loadQuizById(this.quizId);
        }
        this.loadAllQuestions();
    }

    onSubmit() {
        if (this.form.valid) {
            let request;
            if (this.quizId) {
                request = this.quizService.update(this.quizId, this.form.value);
            } else {
                request = this.quizService.add(this.form.value);
            }
            request.subscribe(
                () => {
                    this.router.navigate(['admin', 'quizzes']);
                },
                error => {
                    console.log('error', error);
                },
            );
        }
    }

    loadAllQuestions() {
        this.questionService.getAll().subscribe(
            (results: IQuestion[]) => {
                this.listQuestions = results;
            },
            err => console.log('err' + err),
        );
    }

    sendToArray(id) {
        this.chooseQuestionId = '';
        this.chooseQuestionId = id;
        this.loadQuestionById(id);
        this.questionsIdArray = [...this.questionsIdArray, id];
    }

    private initForm() {
        this.form = this.formBuilder.group({
            title: [null, [Validators.required, Validators.minLength(10)]],
            description: [null],
            questionsArray: [[]],
        });
    }

    private loadQuizById(quizId: string) {
        this.quizService.getByParam<IQuiz>(quizId).subscribe(quiz => this.fillFormWithQuiz(quiz));
    }

    private fillFormWithQuiz(quiz: IQuiz) {
        this.form.patchValue(quiz);

        quiz.questionsArray.forEach(questionId => {
            const question = this.listQuestions.find(question => question._id === questionId);
            if (question) {
                this.questionsTitlesArray = [...this.questionsTitlesArray, question.question];
            }
        });
    }

    private loadQuestionById(questionId: string) {
        this.questionService.getByParam<IQuestion>(questionId).subscribe(result => {
            this.chooseQuestionTitle = result.question;
        });
    }
}
