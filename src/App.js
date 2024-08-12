import React from 'react';
import './App.css';
import Routed from './Components/Route';
import { UserProvider } from './Components/UserContent';


const App = () => {
  return (
    <div>
      <UserProvider>
      <Routed />
      </UserProvider>
    </div>
  );
}

export default App;
