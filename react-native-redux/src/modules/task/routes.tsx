import { Tasks } from 'src/modules/task/views/Tasks';
import { TaskForm } from 'src/modules/task/views/TaskForm';
import { Button, View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../auth/states/auth/actions';
import { colors } from 'src/assets/styles/colors';

function LogoutButton({ dispatch }) {
  return (
    <View style={{ marginRight: 10 }}>
      <Button onPress={() => dispatch(logout())} title="Log out" color={colors.purple} />
    </View>
  );
}

const LogoutButtonContainer = connect()(LogoutButton);

export const taskRoutes = [
  {
    name: 'Tasks',
    screen: Tasks,
    options: {
      title: 'Tasks list',
      headerRight: () => <LogoutButtonContainer />,
    },
  },
  {
    name: 'TaskCreate',
    screen: TaskForm,
    options: {
      title: 'Create task',
    },
  },
  {
    name: 'TaskEdit',
    screen: TaskForm,
    options: {
      title: 'Edit task',
    },
  },
];
