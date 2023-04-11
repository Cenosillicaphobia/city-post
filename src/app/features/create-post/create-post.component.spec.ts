import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CreatePostComponent } from './create-post.component';
import { DataService } from 'src/app/services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  let dataService: DataService;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [ CreatePostComponent ],
  imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
  providers: [ DataService ],
  schemas: [ NO_ERRORS_SCHEMA ]
  })
  .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });

  it('should create a post', () => {
    spyOn(dataService, 'createPost').and.callThrough();
    let form:any = {
      value: {
        id: '',
        title: 'Title',
        body: 'Body'
      }
    } 
    component.createPost(form);
    expect(dataService.createPost).toHaveBeenCalledWith('', {user_id: '', title: 'Title', body: 'Body'});
  });

});