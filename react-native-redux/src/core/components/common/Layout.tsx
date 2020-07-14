import React from 'react';
import { View } from 'react-native';

import { coreStyles } from 'src/assets/styles/core/core';

export const Layout = ({ children }) => (
  <View>
    <View style={coreStyles.wrapper}>{children}</View>
  </View>
);
