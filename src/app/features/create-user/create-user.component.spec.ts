import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [ DataService],
      schemas: [ NO_ERRORS_SCHEMA ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register function should be called when submit button is clicked', () => {
    spyOn(component, 'register');
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]')).nativeElement;
    submitButton.click();
    fixture.detectChanges();
    expect(component.register).toHaveBeenCalled();
  });

  it('should register a new user', () => {

    let form: any = {
      value: {
        name: 'mario',
        email: 'mario@test.com',
        gender: 'male',
        status: 'active'
      }
    }
    
    component.register(form);
    
    expect(component.user.name).toEqual('mario');
    expect(component.user.email).toEqual('mario@test.com');
    expect(component.user.gender).toEqual('male');
    });
  
});
