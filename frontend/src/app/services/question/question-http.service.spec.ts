import { TestBed } from '@angular/core/testing';
import { QuestionHttpService } from './question-http.service';

describe('QuestionHttpService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: QuestionHttpService = TestBed.get(QuestionHttpService);
        expect(service).toBeTruthy();
    });
});
