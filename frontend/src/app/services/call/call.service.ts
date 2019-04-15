import { Injectable } from '@angular/core';
import { IQuestion } from 'src/app/models/question.model';
import { Subject, Observable } from 'rxjs';

export interface Call {
    phone: number;
}
@Injectable({
    providedIn: 'root',
})
export class CallService {
    buttonClick;
    currentCall: Call = {} as Call;
    private currentCall$ = new Subject<Call>();
    private currentQuestion: IQuestion;

    constructor() {}

    makeCall(call: Call) {
        this.currentCall$.next(call);
    }
    getCurrentCall$(): Observable<Call> {
        return this.currentCall$;
    }
    getCurrentQuestion(): IQuestion {
        return this.currentQuestion;
    }
    fillForm(form) {
        this.currentQuestion = form;
    }
    completeCall() {
        this.currentCall$.next(null);
        this.fillForm(null);
    }
}
