import React from 'react';
import Dashboard from './views/Dashboard';
import Project from './views/Project';
import Tickets from './views//Tickets';
import Admin from './views/Admin';
import Register from './views/Register';
import Login from './views/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* TODO: Landing Page Route */}
        <Route path='/' element={ <Register /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/dashboard' element={ <Dashboard />}/>
        <Route path='/project' element={ <Project /> }/>
        <Route path='/tickets' element={ <Tickets /> }/>
        <Route path='/admin' element={ <Admin /> }/>
      </Routes>
    </div>
  );
}

export default App;