import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDataComponent } from './user-data.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.inject(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set postComment to data if data is not empty', () => {
    const id = 1;
    spyOn(dataService, 'getPostComments').and.returnValue(of([{id: 1, name: 'Comment 1'}, {id: 2, name: 'Comment 2'}]));
    component.getComments(id);
    expect(component.postComment).toEqual([{id: 1, name: 'Comment 1'}, {id: 2, name: 'Comment 2'}]);
  });

  it('should set postComment to "No comments yet" if data is empty', () => {
    const id = 2;
    spyOn(dataService, 'getPostComments').and.returnValue(of(''));
    component.getComments(id);
    expect(component.postComment).toEqual([{post_id: id, name: 'No comments yet'}]);
  });
});
