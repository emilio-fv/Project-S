import React from 'react';
import Dashboard from './views/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Dashboard />}/>
        <Route path='/register' />
        <Route path='/login' />
        <Route path='/dashboard' />
        <Route path='/tickets' />
        {/* TODO: Add route to project with parameter for project name */}
        <Route path='/admin' />
      </Routes>
    </div>
  );
}

export default App;
