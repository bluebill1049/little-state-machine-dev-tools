<div align="center"><a href="https://lrz5wloklm.csb.app/"><img src="https://github.com/bluebill1049/little-state-machine/blob/master/docs/logo.png?raw=true" alt="Little State Machine - React Hooks for state management" width="140px" /></a>
    <h1>Little State Machine Devtools</h1>
    
State management made super simple
</div>

<div align="center">

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Little-State-Machine&url=https://github.com/bluebill1049/little-state-machine)&nbsp; [![npm downloads](https://img.shields.io/npm/dm/little-state-machine-devtools.svg?style=flat-square)](https://www.npmjs.com/package/little-state-machine-devtools)
[![npm](https://img.shields.io/npm/dt/little-state-machine-devtools.svg?style=flat-square)](https://www.npmjs.com/package/little-state-machine-devtools)

</div>

<h2>📦 Installation</h2>

    $ npm install little-state-machine-devtools
 
<h2>🖥 <a href="https://codesandbox.io/s/lrz5wloklm">Demo</a></h2>
Check out the <a href="https://codesandbox.io/s/lrz5wloklm">Demo</a>.
<br />
  
```jsx
import { DevTool } from 'little-state-machine-devtools'

<StateMachineProvider>
 {process.env.NODE_ENV !== 'production' && <DevTool />}
</StateMachineProvider>
```
<div align="center">
  <a href="https://lrz5wloklm.csb.app/">
    <img width="500" src="https://github.com/bluebill1049/little-state-machine/blob/master/docs/DevToolScreen.png?raw=true" />
  </a>
</div>

<h2>📖 Example</h2>

📋 `app.js`
```jsx
import React from 'react'
import yourDetail from './yourDetail'
import YourComponent from './yourComponent'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { DevTool } from 'little-state-machine-devtools'

// The following code is for React Native usage
// import { AsyncStorage } from "react-native";
// setStorageType(AsyncStorage);

// create your store
createStore({
  yourDetail,
});

export default () => {
  return (
    <StateMachineProvider>
      {process.env.NODE_ENV !== 'production' && <DevTool />}
      <YourComponent />
    </StateMachineProvider>
  )
}
```

📋 `yourComponent.js`
```jsx
import React from 'react'
import { updateName } from './action.js'
import { useStateMachine } from 'little-state-machine'

export default function YourComponent() {
  const {
    action,
    state: { yourDetail: { name } },
  } = useStateMachine(updateName);

  return <div onClick={() => action({ name: 'bill' })}>{name}</div>
}
```

📋 `yourDetail.js`
```js
export default {
  name: 'test',
}
```

📋 `action.js`
```js
export function updateName(state, payload) {
  return {
    ...state,
    yourDetail: {
      ...state.yourDetail,
      ...payload,
    },
  }
}
```
