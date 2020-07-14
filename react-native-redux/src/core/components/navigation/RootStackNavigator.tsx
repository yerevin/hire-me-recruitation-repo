import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { mainRoutes, navigatorConfig } from 'src/core/routesCombined';
import { authRoutes } from 'src/modules/auth/routes';
import { initTokenLoad } from 'src/modules/auth/states/auth/actions';

export const Stack = createStackNavigator();

const RootStack = connect(mapStateToProps)(({ dispatch, loading, token }) => {
  useEffect(() => {
    dispatch(initTokenLoad());
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <Stack.Navigator screenOptions={navigatorConfig}>
      {(token ? mainRoutes : authRoutes).map(
        ({ name, screen, options }, index) => (
          <Stack.Screen
            name={name}
            component={screen}
            options={options}
            key={index}
          />
        ),
      )}
    </Stack.Navigator>
  );
});

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
  };
}

export default RootStack;
