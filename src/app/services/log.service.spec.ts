import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('local storage set works', () => {
    expect(service.Logout()).toBe(localStorage.clear());
  })

  it('is authenticated work', () => {
    let fakeToken = '27454a22a21546ef61a4c64325d1be6233f12d20f237a7defdf023b21eb36bee';
    localStorage.setItem('token', fakeToken)
    expect(service.isAuthenticated()).toBeTrue()
  })

  it('is authenticated work', () => {
    localStorage.clear()
    expect(service.isAuthenticated()).toBeFalse()
  })

});
