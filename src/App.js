import './App.css';
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react';
import DSA from "./components/DSA.js"
import Android from "./components/Android.js"
import Homepage from "./components/Homepage.js"
import Ios from "./components/Ios.js"
import Webdev from "./components/Webdev.js"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/android" component={Android}/>
          <Route exact path="/ios" component={Ios}/>
          <Route exact path="/webdev" component={Webdev}/>
          <Route exact path="/dsa" component={DSA}/>
        </div>
      </Router>
    );
  }

export default App;
