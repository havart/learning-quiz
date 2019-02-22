import {Component} from '@angular/core';
import {QUESTION_CATEGORIES} from '../../../models/question.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  QUESTION_CATEGORIES = QUESTION_CATEGORIES;
}
