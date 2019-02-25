import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  quizId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.quizId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {}
}
