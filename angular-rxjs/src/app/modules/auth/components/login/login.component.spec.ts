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
   * @returns {Promise<any>}
   */
  public login(credentials: ICredentials) {
    return of({ accessToken: 'string' });
  }
}

describe('LoginFormComponent', () => {
  let fixture: ComponentFixture<LoginFormComponent>;
  let componentInstance: LoginFormComponent;
  let nativeElement: HTMLElement | any;

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
    componentInstance.email.setValue('test@test.com');

    // assert
    expect(componentInstance.email.value).toBe('test@test.com');
  });

  it(`should update password field in form`, () => {
    // arrange

    // act
    componentInstance.password.setValue('testtest');

    // assert
    expect(componentInstance.password.value).toBe('testtest');
  });

  it(`should onSubmit calls onLogin`, () => {
    // arrange
    const spyOnLogin = spyOn(componentInstance, 'onLogin').and.callThrough();

    // act
    componentInstance.onSubmit(componentInstance.authForm.value);

    // assert
    expect(spyOnLogin).toHaveBeenCalled();
  });

  it(`should onLogin change busy.action value`, () => {
    // arrange
    spyOn(componentInstance.router, 'navigateByUrl').and.callThrough();

    // act
    componentInstance.onLogin(componentInstance.authForm.value);

    // assert
    expect(componentInstance.router.navigateByUrl).toHaveBeenCalledWith(
      '/task'
    );
  });
});
