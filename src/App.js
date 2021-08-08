import React, {useState} from 'react';
import Navbar from './pages/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import News from "./components/News";
import Admissions from "./components/Admissions";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Portal from "./components/Portal";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import {Actions} from "./Actions";
import {Provider} from "./Context";
function App() {

  const data = Actions();
  return (
      <Router>
        <Provider value={data}> {/*Make the authentication accessible for all children*/}
        <Navbar />
        <Switch>         
            <Route path='/' exact component={Home}/>
            <Route path='/news' exact component={News}/>
            <Route path='/admissions' exact component={Admissions}/>
            <Route path='/about-us' exact component={AboutUs}/>
            <Route path='/contact-us' exact component={ContactUs}/>
            <Route path='/portal' exact component={Portal}/>
            <Route path='/users' exact component={Users}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
        </Switch>
        </Provider>
      </Router>
  );
}

export default App;