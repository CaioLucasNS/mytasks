import React from 'react';
import {render} from '@testing-library/react-native';
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

    const data = {id: 'task01', title: 'task01'};

    await act(() => {
      return result.current.addTask(data);
    });

    expect(result.current.tasks).toBeTruthy();
  });
});
