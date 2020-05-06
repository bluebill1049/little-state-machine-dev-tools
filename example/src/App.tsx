import React from 'react';
import './App.css';
import Form from './Form';
import yourDetails from './states/yourDetails';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { DevTool } from 'little-state-machine-devtools';

window.sessionStorage.setItem(
  'test',
  '{"yourDetails": {"firstname": "hello", "addresses": [{"street": "streetC","suburb": "suburbC","state": "stateC"}]}}',
);

createStore(
  {
    yourDetails,
  },
);

const App: React.FC = () => {
  return (
    <StateMachineProvider>
      <DevTool />
      <div className="App">
        <h1>Little State Machine</h1>
        <Form />
      </div>
    </StateMachineProvider>
  );
};

export default App;
