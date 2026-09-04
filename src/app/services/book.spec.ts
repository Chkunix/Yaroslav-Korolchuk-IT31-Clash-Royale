import { TestBed } from '@angular/core/testing';

import { Book } from './book';

describe('Book', () => {
  let service: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = {} as Book;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
