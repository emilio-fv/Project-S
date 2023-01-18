import React from 'react';
import { Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'/>
        <Route path='/register' />
        <Route path='/login' />
        <Route path='/dashboard' />
        <Route path='/tickets' />
        {/* TODO: Add route to project with parameter for project name */}
        <Route path='/admin' />
      </Router>
    </div>
  );
}

export default App;
