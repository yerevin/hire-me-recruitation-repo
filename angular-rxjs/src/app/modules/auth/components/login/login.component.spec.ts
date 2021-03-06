import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { LoginFormComponent } from './login.component';
import { AuthModule } from './../../module';
import { ICredentials } from '../../interfaces/credentials.interface';
import { AuthService } from '../../services/service';
import { TaskListComponent } from './../../../task/components/list/list.component';

class FakeAuthService {
  /**
   * Log user in
   *
   * @returns {Observable<{ accessToken: 'string' }>}
   */
  public login(credentials: ICredentials) {
    return of({ accessToken: 'string' });
  }
}

describe('LoginFormComponent', () => {
  let fixture: ComponentFixture<LoginFormComponent>;
  let componentInstance: LoginFormComponent;
  let nativeElement: HTMLElement | any;

  const LOGIN_FORM_VALUE_MOCK = {
    email: 'test@test.com',
    password: 'testtest',
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
      declarations: [LoginFormComponent],
      providers: [
        {
          provide: AuthService,
          useClass: FakeAuthService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
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

  it(`should onLogin return error message 'Form not valid'`, () => {
    // arrange
    const message = 'Form not valid';

    // act
    const onLoginMessage = componentInstance.onLogin(
      componentInstance.authForm.value
    );

    // assert
    expect(onLoginMessage).toBe(message);
  });

  it(`should onSubmit calls onLogin`, () => {
    // arrange
    const spyOnLogin = spyOn(componentInstance, 'onLogin').and.callThrough();

    // act
    componentInstance.onSubmit(componentInstance.authForm.value);

    // assert
    expect(spyOnLogin).toHaveBeenCalled();
  });

  it(`should onLogin success call navigateByUrl to /task screen`, () => {
    // arrange
    componentInstance.authForm.setValue(LOGIN_FORM_VALUE_MOCK);
    spyOn(componentInstance.router, 'navigateByUrl').and.callThrough();

    // act
    componentInstance.onLogin(componentInstance.authForm.value);

    // assert
    expect(componentInstance.router.navigateByUrl).toHaveBeenCalledWith(
      '/task'
    );
  });

  it(`should onLogin success call userSessionService.createData`, () => {
    // arrange
    componentInstance.authForm.setValue(LOGIN_FORM_VALUE_MOCK);
    spyOn(componentInstance.userSessionService, 'createData').and.callThrough();

    // act
    componentInstance.onLogin(componentInstance.authForm.value);

    // assert
    expect(componentInstance.userSessionService.createData).toHaveBeenCalled();
  });

  it(`should onLogin success update a userSessionService data`, (done) => {
    // arrange
    componentInstance.authForm.setValue(LOGIN_FORM_VALUE_MOCK);
    const mock = { accessToken: 'string' };

    // act
    componentInstance.onLogin(componentInstance.authForm.value);

    // assert
    componentInstance.userSessionService.data.subscribe((data) => {
      expect(data.accessToken).toBe(mock.accessToken);
      done();
    });
  });
});
