import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;

  onSignIn() {
    this.userName = 'Cool User Ivanovich';
  }

  onSignOut() {
    this.userName = '';
  }
}
