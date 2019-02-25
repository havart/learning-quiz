import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AdminAllQuestionsComponent} from './admin-all-questions.component';

describe('AdminAllQuestions.HtmlComponent', () => {
  let component: AdminAllQuestionsComponent;
  let fixture: ComponentFixture<AdminAllQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllQuestionsComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
