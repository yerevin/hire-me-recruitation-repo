import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { SignupFormComponent } from './signup.component';
import { AuthModule } from './../../module';
import { ICredentials } from '../../interfaces/credentials.interface';
import { AuthService } from '../../services/service';
import { TaskListComponent } from './../../../task/components/list/list.component';

class FakeAuthService {
  /**
   * Sign up user
   *
   * @returns {Observable<{ accessToken: 'string' }>}
   */
  public signup(credentials: ICredentials) {
    return of({ accessToken: 'string' });
  }
}

describe('SignupFormComponent', () => {
  let fixture: ComponentFixture<SignupFormComponent>;
  let componentInstance: SignupFormComponent;
  let nativeElement: HTMLElement | any;

  const REGISTER_FORM_VALUE_MOCK = {
    email: 'test@test.com',
    password: 'testtest',
    confirmPassword: 'testtest',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'task', component: TaskListComponent },
        ]),
        HttpClientModule,
        AuthModule,
      ],
      declarations: [SignupFormComponent],
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupFormComponent);
    componentInstance = fixture.componentInstance; // The component instantiation
    nativeElement = fixture.nativeElement; // The HTML reference
  }));

  it('should create the login component', () => {
    // assert
    expect(componentInstance).toBeTruthy();
  });

  it(`should update email field in form`, () => {
    // arrange

    // act
    componentInstance.email?.setValue('test@test.com');

    // assert
    expect(componentInstance.email?.value).toBe('test@test.com');
  });

  it(`should update password field in form`, () => {
    // arrange

    // act
    componentInstance.password?.setValue('testtest');

    // assert
    expect(componentInstance.password?.value).toBe('testtest');
  });

  it(`should update confirmPassword field in form`, () => {
    // arrange

    // act
    componentInstance.confirmPassword?.setValue('testtest');

    // assert
    expect(componentInstance.confirmPassword?.value).toBe('testtest');
  });

  it(`should onRegister return error message 'Form not valid'`, () => {
    // arrange
    const message = 'Form not valid';

    // act
    const onRegisterMessage = componentInstance.onRegister(
      componentInstance.authForm.value
    );

    // assert
    expect(onRegisterMessage).toBe(message);
  });

  it(`should onSubmit calls onRegister`, () => {
    // arrange
    const spyOnLogin = spyOn(componentInstance, 'onRegister').and.callThrough();

    // act
    componentInstance.onSubmit(componentInstance.authForm.value);

    // assert
    expect(spyOnLogin).toHaveBeenCalled();
  });

  it(`should onRegister success call navigateByUrl to /task screen`, () => {
    // arrange
    componentInstance.authForm.setValue(REGISTER_FORM_VALUE_MOCK);
    spyOn(componentInstance.router, 'navigateByUrl').and.callThrough();

    // act
    componentInstance.onRegister(componentInstance.authForm.value);

    // assert
    expect(componentInstance.router.navigateByUrl).toHaveBeenCalledWith(
      '/task'
    );
  });

  it(`should onRegister success call userSessionService.createData`, () => {
    // arrange
    componentInstance.authForm.setValue(REGISTER_FORM_VALUE_MOCK);
    spyOn(componentInstance.userSessionService, 'createData').and.callThrough();

    // act
    componentInstance.onRegister(componentInstance.authForm.value);

    // assert
    expect(componentInstance.userSessionService.createData).toHaveBeenCalled();
  });

  it(`should onRegister success update a userSessionService data`, (done) => {
    // arrange
    componentInstance.authForm.setValue(REGISTER_FORM_VALUE_MOCK);
    const mock = { accessToken: 'string' };

    // act
    componentInstance.onRegister(componentInstance.authForm.value);

    // assert
    componentInstance.userSessionService.data.subscribe((data) => {
      expect(data.accessToken).toBe(mock.accessToken);
      done();
    });
  });
});
