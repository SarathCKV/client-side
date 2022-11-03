import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <section className='container'>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/name/:name' component={DetailPage} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default App;
