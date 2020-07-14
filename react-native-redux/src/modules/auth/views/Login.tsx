import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { LoginForm } from 'src/modules/auth/components/login/form';
import { Layout } from 'src/core/components/common';

export const Login = connect(mapStateToProps)(({ loading }) => {
  if (loading) return <ActivityIndicator />;

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
});

function mapStateToProps(state) {
  return {
    authStore: state.auth.loading,
  };
}
