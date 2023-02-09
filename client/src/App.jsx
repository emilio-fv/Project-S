import React from 'react';
import Dashboard from './views/Dashboard';
import Project from './views/Project';
import Tickets from './views//Tickets';
import Admin from './views/Admin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Dashboard />}/>
        <Route path='/project' element={ <Project /> }/>
        <Route path='/tickets' element={ <Tickets /> }/>
        <Route path='/admin' element={ <Admin /> }/>
      </Routes>
    </div>
  );
}

export default App;