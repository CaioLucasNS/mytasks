import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ITasksContext, TasksContext} from '../../context/TasksContext';

export function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <FlatList
      data={tasks as unknown as ITasksContext[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskTitle}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskButton: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  taskTitle: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
