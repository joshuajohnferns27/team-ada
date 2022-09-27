import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Dashboard/>
      <Routes>
        <Route path ='/' exact />
      </Routes>
      </Router>
    </>
  );
}

export default App;
