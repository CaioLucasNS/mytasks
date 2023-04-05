import React from 'react';
import {act, renderHook} from '@testing-library/react-hooks';
import {render} from '@testing-library/react-native';
import {TaskList} from '../../src/components/TaskList';
import {TasksProvider, useTaskList} from '../../src/context/TasksContext';

describe('TaskList component', () => {
  it('should remove item on tasks list when removeTask fn calls', async () => {
    render(<TaskList />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const taskData = {id: 'task01', title: 'task01'};

    // add taskData title into input
    await act(() => result.current.addTask(taskData));

    expect(result.current.tasks[0].title).toEqual('task01');

    // remove task
    await act(() => result.current.removeTask('task01'));

    expect(result.current.tasks.length).toEqual(0);
  });
});
