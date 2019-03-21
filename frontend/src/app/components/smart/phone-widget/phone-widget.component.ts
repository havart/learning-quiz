import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-phone-widget',
    templateUrl: './phone-widget.component.html',
    styleUrls: ['./phone-widget.component.css'],
})
export class PhoneWidgetComponent implements OnInit {
    call = true;
    color = false;
    constructor() {}
    ngOnInit() {}
    toggle() {
        this.call = !this.call;
        this.color = !this.color;
    }
}
