import React, {useContext} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ITask, TasksContext} from '../../context/TasksContext';

export function TaskList() {
  const {tasks, removeTask} = useContext(TasksContext);

  const handleRemoveTask = (id: string) => {
    Alert.alert('Are you sure? 🤨', 'Do you really want to delete the task?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.taskButton}
          onPress={() => handleRemoveTask(item.id)}>
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
