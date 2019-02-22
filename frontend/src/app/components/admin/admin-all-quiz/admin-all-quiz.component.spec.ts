import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllQuizComponent } from './admin-all-quiz.component';

describe('AdminAllQuizComponent', () => {
  let component: AdminAllQuizComponent;
  let fixture: ComponentFixture<AdminAllQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
