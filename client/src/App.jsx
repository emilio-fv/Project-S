import React from 'react';
import Dashboard from './views/Dashboard';
import Project from './views/Project';
import Tickets from './views//Tickets';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Dashboard />}/>
        <Route path='/project' element={ <Project /> }/>
        <Route path='/tickets' element={ <Tickets /> }/>
      </Routes>
    </div>
  );
}

export default App;