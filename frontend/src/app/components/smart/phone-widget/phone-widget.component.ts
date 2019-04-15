import { Component, OnInit } from '@angular/core';
import { CallService, Call } from 'src/app/services/call/call.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.css'],
})
export class PhoneWidgetComponent implements OnInit {
    truth = false;
    currentCall$: Observable<Call>;
    constructor(private call: CallService) {}
    ngOnInit() {
        this.currentCall$ = this.call.getCurrentCall$();
    }
    toggle() {
        this.truth = !this.truth;
        if (this.truth) {
            const phone = Math.floor(Math.random() * 1000000000);
            this.call.makeCall({ phone });
        } else {
            this.call.completeCall();
        }
    }
}
