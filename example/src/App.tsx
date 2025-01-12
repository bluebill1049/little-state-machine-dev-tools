import './App.css'

import Form from './Form';
import yourDetails from './states/yourDetails';
import { createStore } from 'little-state-machine';
import { DevTool } from './src';

createStore(
  {
    yourDetails,
  },
);

function App() {
  return (
    <>
      <DevTool />
      <div className="App">
        <h1>Little State Machine</h1>
        <Form />
      </div>
    </>
  );
}

export default App
