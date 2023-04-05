import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/pages/Home';

describe('Home page', () => {
  it('should render Home page', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Nova tarefa');
    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });
});
