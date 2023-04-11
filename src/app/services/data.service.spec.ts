import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get users with page and perPages', () => {
    const mockUsers = [{ id: 1, name: 'Mario Rossi' }, { id: 2, name: 'Paola Verdi' }];
    const page = 1;
    const perPages = 10;
    
    service.getUsers(page, perPages).subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });
    
    const req = httpMock.expectOne(`${service.baseLink}/users?page=${page}&per_page=${perPages}`);
    
    expect(req.request.method).toBe('GET');
    
    req.flush(mockUsers);
  });

  it('should return comments matching the post id', () => {
    const dummyComments = [
      {postId: 1, title: 'Test Title', body: 'Test Body'},
      {postId: 2, title: 'Test Title', body: 'Test Body'},
      {postId: 3, title: 'Test Title', body: 'Test Body'}
    ];

    const postId = 1;

    service.getPostComments(1).subscribe(comments => {
      expect(comments).toEqual(dummyComments);
    });

    const req = httpMock.expectOne(`${service.baseLink}/posts/${postId}/comments`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyComments);
  });

  it('should add user', () => {
    const user = {
    name: 'Mario Rossi',
    email: 'mariorossi@test.com',
    gender: 'male',
    status: 'active'
    };
    
    service.addUser(user).subscribe(response => {
      expect(response.status).toBe(200);
    });
    
    const request = httpMock.expectOne(`${service.baseLink}/users`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(user);
    request.flush({ status: 200 });
    });

    it('should delete a user', () => {
      const mockUserId = 1;
      
      service.deleteUser(mockUserId).subscribe(res => {
        expect(res.status).toBe(200);
      });
      
      const req = httpMock.expectOne(`${service.baseLink}/users/${mockUserId}`);
      expect(req.request.method).toBe('DELETE');
      req.flush({ status: 200 });
      });
});