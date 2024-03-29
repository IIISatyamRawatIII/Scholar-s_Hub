import { useState } from 'react';
import React from 'react'
import './Ios.css'
import { Link } from 'react-router-dom'
//import axios from 'axios';
//import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
//import DSA from "./components/DSA.js"
//import Bargraph from "./components/Bargraph.js"
//import Linechart from "./components/Linechart"



function Ios() {
    return (
      <div className="maindiv">
        <h2 style={{marginLeft:"50px", fontSize:"50px"}}>IOS Development</h2>
        <div style={{display:'flex'}}>
        <div className="javacard">
              <h2>Swift</h2>
              <img src = {'data:image/jpeg;base64,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'} alt=''/>
              <div className='btn'>
                  <button>
                    <a href="https://codewithchris.com/swift-tutorial-complete/">Free Info</a>
                  </button>
                  <button>
                    <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/">Course</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=Ulp1Kimblg0&t=12s">Video</a>
                  </button>
                </div>    
          </div>
          <div className="javacard">
              <h2 style={{marginLeft:"50px"}}>IOS development</h2>
              <img src = {'https://uploads-ssl.webflow.com/5eb4f2c9c01e0c6cc59d6e81/5ef6d11ad727ea76ed3f2438_AppIt%20Ventures%20Blog%20-%20Swift%20and%20iOS%20App%20Development.jpg'} alt=''/>
              <div className='btn'>
                  <button>
                    <a href="https://developer.apple.com/tutorials/app-dev-training/#views">Free Info</a>
                  </button>
                  <button>
                    <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/">Course</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=F2ojC6TNwws">Video</a>
                  </button>
                </div>    
          </div>
        </div>
        <div style={{height:"50px"}}>

        </div>
      </div>
    );
  }

export default Ios;
