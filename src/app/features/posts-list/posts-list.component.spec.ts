import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsListComponent } from './posts-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListComponent);
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

  it('should filter posts by title', () => {
    let fakePosts = [
      { id: 1, title: 'Title test 1', body: 'Body Test 1' },
      { id: 2, title: 'Title test 2', body: 'Body Test 2' },
      { id: 3, title: 'Title test 3', body: 'Body Test 3' },
    ];
    spyOn(dataService, 'getPosts').and.returnValue(of(fakePosts));
    const searchValue = 'Title test 1';
    component.Search(searchValue);
    expect(component.posts.length).toEqual(1);
    expect(component.posts[0].title).toEqual('Title test 1');
  })
  
});
