import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import store from 'src/core/storesCombined';
import RootStack from 'src/core/components/navigation/RootStackNavigator';

import './../assets/i18n/i18n';

enableScreens();

export default class App extends React.Component {
  public render() {
    return (
      <NavigationContainer fallback={<ActivityIndicator />}>
        <Provider store={store}>
          <View style={styles.container}>
            <RootStack />
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});
