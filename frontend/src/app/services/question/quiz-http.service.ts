import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class QuizHttpService extends BaseHttpService {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'quizzes/');
  }
}
