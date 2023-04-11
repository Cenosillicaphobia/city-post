// import { TestBed } from '@angular/core/testing';
// import { LoadingInterceptor } from './loading.interceptor';
// import { HttpRequest } from '@angular/common/http';

// describe('LoadingInterceptor', () => {
//   let interceptor: LoadingInterceptor;
//   let loadingService: { setLoading: jasmine.Spy };

//   beforeEach(() => { 
//     TestBed.configureTestingModule({
//       providers: [ LoadingInterceptor ]
//     })
//     interceptor = TestBed.inject(LoadingInterceptor);
//     loadingService = jasmine.createSpyObj('LoadingService', ['setLoading']);
//     interceptor = new LoadingInterceptor(loadingService as any);
//   });

//   it('should be created', () => {
//     const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
//     expect(interceptor).toBeTruthy();
//   });

//   it('should call setLoading with true on intercept', () => {
//     const request = new HttpRequest<string>('GET', 'https://example.com');
//     const next = { handle: jasmine.createSpy('handle') };
//     interceptor.intercept(request, next);
//     expect(loadingService.setLoading).toHaveBeenCalledWith(true);
//   });

// });

import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoadingInterceptor } from './loading.interceptor';
import { LoaderService } from './loader.service';
import { HttpRequest, HttpResponse } from '@angular/common/http';

describe('LoadingInterceptor', () => {
let interceptor: LoadingInterceptor;
let loaderService: LoaderService;
let httpMock: HttpTestingController;

beforeEach(async(() => {
TestBed.configureTestingModule({
imports: [HttpClientTestingModule],
providers: [LoadingInterceptor, LoaderService]
})
.compileComponents();
}));

beforeEach(() => {
interceptor = TestBed.inject(LoadingInterceptor);
loaderService = TestBed.inject(LoaderService);
httpMock = TestBed.inject(HttpTestingController);
});

afterEach(() => {
httpMock.verify();
});

it('should increase total requests and activate loader', () => {
const request = new HttpRequest('GET', 'https://example.com/api');
interceptor.intercept(request, httpMock);
expect(interceptor.totalRequests).toBe(1);
expect(loaderService.getLoading()).toBeTruthy();
});

});
