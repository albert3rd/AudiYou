import React from 'react'
import './App.css';
import HomePage from "./mainComp/HomePage"
import Login from './mainComp/Login'
import SignUp from './mainComp/SignUp'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {AuthProvider} from '../src/useContextFolder/AuthProvider.js/AuthProvider'
import PrivateRouter from './mainComp/PrivateRouter'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRouter exact path="/" component={HomePage}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
