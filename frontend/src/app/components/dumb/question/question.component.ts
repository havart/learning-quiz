import { Component, OnInit, Input, Output } from '@angular/core';
import { QUESTION_CATEGORIES } from 'src/app/models/question.model';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
    @Input() questions: object;
    @Output() doEvent = new EventEmitter<string>();
    QUESTION_CATEGORIES = QUESTION_CATEGORIES;
    constructor() {}

    ngOnInit() {}
    getEvent(event: string) {
        this.doEvent.emit(event);
    }
    getCategoryTitle(categoryId: number): string {
        const category = QUESTION_CATEGORIES.find(el => el.key === categoryId);
        return category ? category.title : '-';
    }
}
