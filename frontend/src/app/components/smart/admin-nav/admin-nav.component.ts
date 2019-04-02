import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-admin-nav',
    templateUrl: './admin-nav.component.html',
    styleUrls: ['./admin-nav.component.css'],
})
export class AdminNavComponent {
    menuItems = [
        { url: '/admin', title: 'Главная' },
        { url: '/admin/questions', title: 'Все вопросы' },
        { url: '/admin/questions/new', title: 'Добавить вопрос' },
        { url: '/admin/quiz/new', title: 'Добавить тест' },
        { url: '/main', title: 'Вернуться в приложение' },
    ];

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) {}
}
