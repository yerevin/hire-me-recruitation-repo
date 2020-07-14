import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { coreStyles } from 'src/assets/styles/core/core';
import { loadTask, updateTask, createTask } from '../../states/tasks/api';

const TaskForm = connect()(({ dispatch }) => {
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const route: any = useRoute();
  const navigation = useNavigation();
  const [t] = useTranslation();

  useEffect(() => {
    const handleLoad = async () => {
      setLoading(true);
      let task = await loadTask(route.params?.id);
      setLoading(false);
      if (task) {
        setName(task.name);
        setIsEdit(true);
      }
    };

    if (route.params?.id) handleLoad();
  }, [route.params?.id]);

  const submit = () => {
    if (isEdit) {
      return updateTask(route.params?.id, { name })
        .then(() => {
          navigation.navigate('Tasks');
        })
        .catch((err) => err);
    }

    return createTask({ name })
      .then(() => {
        navigation.navigate('Tasks');
      })
      .catch((err) => err);
  };

  if (loading) return <ActivityIndicator />;

  return (
    <View>
      <View>
        <Text style={coreStyles.label}>{t('task.name')}</Text>
        <TextInput
          placeholder={t('task.name')}
          style={coreStyles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <TouchableOpacity style={coreStyles.actionButton} onPress={submit}>
        <Text style={coreStyles.actionButtonText}>{t('core.save')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...coreStyles.actionButton,
          backgroundColor: 'gray',
        }}
        onPress={() => navigation.navigate('Tasks')}>
        <Text style={coreStyles.actionButtonText}>{t('core.cancel')}</Text>
      </TouchableOpacity>
    </View>
  );
});

export const TaskFormContainer = () => {
  return (
    <View>
      <TaskForm />
    </View>
  );
};
