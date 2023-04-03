import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Task {
  id: string;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({tasks}: TaskListProps) {
  return (
    <FlatList
      data={tasks}
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
