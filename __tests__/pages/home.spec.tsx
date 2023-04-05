import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';

import {Home} from '../../src/pages/Home';
import {TasksProvider, useTaskList} from '../../src/context/TasksContext';

describe('Home page', () => {
  it('should render Home page', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Nova tarefa');
    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });

  it('should add 1 item on tasks list', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider, // passing provider
    });

    const taskData = {id: 'task01', title: 'task01'};

    await act(() => {
      return result.current.addTask(taskData);
    });

    expect(result.current.tasks).toBeTruthy();
  });

  it('should add 1 item on tasks list when click on add button', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const inputNewTask = getByPlaceholderText('Nova tarefa');
    const addButton = getByTestId('addButton');

    const taskData = {id: 'task01', title: 'task01'};

    // add taskData title into input
    act(() => fireEvent.changeText(inputNewTask, taskData.title));

    await act(async () => {
      await fireEvent.press(addButton);
    });

    expect(result.current.tasks).toBeTruthy();
  });
});
