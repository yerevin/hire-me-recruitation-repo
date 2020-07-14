import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { register } from 'src/modules/auth/states/auth/api';
import { coreStyles } from 'src/assets/styles/core/core';

export const SignupForm = connect()(({ dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const [t] = useTranslation();

  const submit = () => {
    return dispatch(
      register({ email, password, confirm_password: confirmPassword }),
    )
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tasks' }],
        });
      })
      .catch((err) => err);
  };

  return (
    <View style={{ paddingTop: 60 }}>
      <View>
        <Text style={coreStyles.label}>{t('auth.email')}</Text>
        <TextInput
          keyboardType="email-address"
          placeholder={t('auth.email')}
          style={coreStyles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View>
        <Text style={coreStyles.label}>{t('auth.password')}</Text>
        <TextInput
          secureTextEntry={true}
          placeholder={t('auth.password')}
          style={coreStyles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View>
        <Text style={coreStyles.label}>{t('auth.confirm-password')}</Text>
        <TextInput
          secureTextEntry={true}
          placeholder={t('auth.confirm-password')}
          style={coreStyles.input}
          value={confirmPassword}
          onSubmitEditing={submit}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={coreStyles.actionButton} onPress={submit}>
        <Text style={coreStyles.actionButtonText}>{t('auth.register')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={coreStyles.actionButton}
        onPress={() => navigation.goBack()}>
        <Text style={coreStyles.actionButtonText}>{t('auth.log-in')}</Text>
      </TouchableOpacity>
    </View>
  );
});
