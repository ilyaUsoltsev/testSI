import { TestBed, async, inject } from '@angular/core/testing';

import { BillGuard } from './bill.guard';

describe('BillGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillGuard]
    });
  });

  it('should ...', inject([BillGuard], (guard: BillGuard) => {
    expect(guard).toBeTruthy();
  }));
});
