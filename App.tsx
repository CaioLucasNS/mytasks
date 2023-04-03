import React from 'react';
import {TasksProvider} from './src/context/TasksContext';
import {Home} from './src/pages/Home';

function App(): JSX.Element {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}

export default App;
