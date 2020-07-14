import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { coreStyles } from 'src/assets/styles/core/core';
import { loadTasks, deleteTask } from 'src/modules/task/states/tasks/api';

const TasksListHeader = () => {
  const navigation = useNavigation();
  const [t] = useTranslation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ flex: 1, marginVertical: 10, fontSize: 15 }}>
        {t('task.list-title')}
      </Text>
      <TouchableOpacity
        style={{ ...coreStyles.actionButton, padding: 10, height: 35 }}
        onPress={() => navigation.navigate('TaskCreate')}>
        <Text style={coreStyles.actionButtonText}>{t('core.add')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TasksListHead = () => {
  const [t] = useTranslation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text
        style={{
          flex: 1,
          marginVertical: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {t('task.name')}
      </Text>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 15,
          marginHorizontal: 5,
          fontWeight: 'bold',
        }}>
        {t('core.actions')}
      </Text>
    </View>
  );
};

const TasksList = connect(mapStateToProps)(({ dispatch, loading, tasks }) => {
  const [t] = useTranslation();
  const navigation = useNavigation();

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => {
      dispatch(loadTasks());
    });
  };

  if (loading) return <ActivityIndicator />;

  if (!tasks?.length) return <Text>{t('task.not-found')}</Text>;

  return (
    <FlatList
      data={tasks}
      keyExtractor={(task) => task._id}
      renderItem={({ item }) => {
        return (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: 1, marginVertical: 15, fontSize: 14 }}>
              {item.name}
            </Text>

            <TouchableOpacity
              style={{ ...coreStyles.actionButton, padding: 10, height: 35 }}
              onPress={() => navigation.navigate('TaskEdit', { id: item._id })}>
              <Text style={coreStyles.actionButtonText}>{t('core.edit')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...coreStyles.actionButton,
                padding: 10,
                height: 35,
                backgroundColor: 'red',
              }}
              onPress={() => handleDeleteTask(item._id)}>
              <Text style={coreStyles.actionButtonText}>
                {t('core.delete')}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}></FlatList>
  );
});

function mapStateToProps(state) {
  return {
    loading: state.task.tasks.loading,
    tasks: state.task.tasks.data,
  };
}

export const TasksListContainer = connect()(({ dispatch }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(loadTasks());
  }, [isFocused]);

  return (
    <View>
      <TasksListHeader />
      <TasksListHead />
      <TasksList />
    </View>
  );
});
