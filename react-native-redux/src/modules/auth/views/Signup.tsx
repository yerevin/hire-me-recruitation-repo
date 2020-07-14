import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { SignupForm } from 'src/modules/auth/components/signup/form';
import { Layout } from 'src/core/components/common';

export const Signup = connect(mapStateToProps)(({ loading }) => {
  if (loading) return <ActivityIndicator />;

  return (
    <Layout>
      <SignupForm />
    </Layout>
  );
});

function mapStateToProps(state) {
  return {
    authStore: state.auth.loading,
  };
}
