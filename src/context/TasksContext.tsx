import React, {createContext} from 'react';

export interface ITasksContext {
  id: string;
  title: string;
}

interface ITasksProvider {
  children: React.ReactElement;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FunctionComponent<ITasksProvider> = ({
  children,
}) => {
  return (
    <TasksContext.Provider value={{id: '1', title: 'Task 01'}}>
      {children}
    </TasksContext.Provider>
  );
};
