import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    userName: string;
    isOpen = false;

    onSignIn() {
        this.userName = 'Cool User Ivanovich';
    }

    onSignOut() {
        this.userName = '';
    }

}
