import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';

interface ITasksProvider {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: string) => void;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

const tasksData = '@MyTasks:Tasks';

export const TasksProvider: React.FunctionComponent<ITasksProvider> = ({
  children,
}) => {
  const [data, setData] = useState<ITask[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }

    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (err) {
      throw new Error(err as string);
    }
  };

  const removeTask = async (id: string) => {
    const newTaskList = data.filter(task => task.id !== id);
    setData(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  };

  return (
    <TasksContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITasksContext {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList must be used in a TaskProvider');
  }

  return context;
}
