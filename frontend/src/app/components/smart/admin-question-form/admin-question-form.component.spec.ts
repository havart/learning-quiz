import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionFormComponent } from './admin-question-form.component';

describe('AdminQuizFormComponent', () => {
    let component: AdminQuestionFormComponent;
    let fixture: ComponentFixture<AdminQuestionFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminQuestionFormComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminQuestionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
