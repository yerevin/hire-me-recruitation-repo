import { authRoutes } from 'src/modules/auth/routes';
import { taskRoutes } from 'src/modules/task/routes';
import { colors } from 'src/assets/styles/colors';

export const navigatorConfig = {
  gesturesEnabled: true,
  headerStyle: {
    backgroundColor: colors.purple,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

export const mainRoutes = [...taskRoutes, ...authRoutes];
