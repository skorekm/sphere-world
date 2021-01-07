import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import { Environment } from './components/Environment';
import { Lights } from './components/Lights';
import { Spheres } from './components/Spheres';

import './index.css';

const App = () => {
  return (
    <> 
      <Canvas>
        <Lights />
        <Environment />
        <Spheres />
      </Canvas>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
