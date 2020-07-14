import { Login } from 'src/modules/auth/views/Login';
import { Signup } from 'src/modules/auth/views/Signup';

export const authRoutes = [
  {
    name: 'login',
    screen: Login,
    options: {
      title: 'Log in',
    },
  },
  {
    name: 'signup',
    screen: Signup,
    options: {
      title: 'Register',
    },
  },
];
