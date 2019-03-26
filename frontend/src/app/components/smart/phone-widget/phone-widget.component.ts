import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.css'],
})
export class PhoneWidgetComponent implements OnInit {
    truth = false;
    close = false;
    constructor() {}
    ngOnInit() {}
    toggle() {
        this.truth = !this.truth;
        this.close = true;
    }
    isOpen() {
        this.close = !this.close;
    }
}
