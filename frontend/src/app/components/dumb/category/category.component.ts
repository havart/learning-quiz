import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IQuiz } from 'src/app/models/quiz.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
    @Input() testCategory;

    constructor(private router: Router) {}
    ngOnInit() {}
    goById(id) {
        this.router.navigate(['/test', id]);
    }
}
