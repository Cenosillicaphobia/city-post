import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should set token in localStorage and navigate to users list", () => {

    const form: any= { value: { token: "myToken" } };
    const localStorageSpy = spyOn(localStorage, "setItem");
    const routerSpy = spyOn(TestBed.inject(Router), "navigate");
    
    component.login(form);
    
    expect(localStorageSpy).toHaveBeenCalledWith("token", "myToken");
    expect(routerSpy).toHaveBeenCalledWith(["users-list"]);
  });

});
