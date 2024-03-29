import { useState } from 'react';
import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
//import axios from 'axios';
//import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
//import DSA from "./components/DSA.js"
//import Bargraph from "./components/Bargraph.js"
//import Linechart from "./components/Linechart"



function Homepage() {
    return (
      <div className="main">
        <div className="topbar">
            <button>
              <a href="http://localhost:3001/">Messages</a>
            </button>
            <button>
              <a href="https://www.onlinegdb.com/">Compiler</a>
            </button>
        </div>
        <div className="headline">
          <h1>Welcome To Scholar's Hub</h1>
        </div>
        <div className="cards">
            <div className='card-container'>
              <div className='image-container'>
                <img src = {'https://cdn.vox-cdn.com/thumbor/-_iz84sxjFk1L4JHRwhY6TCdu9o=/0x0:2040x1560/920x613/filters:focal(857x617:1183x943):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65088839/Android_logo_stacked__RGB_.5.jpg'} alt=''/>
              </div>
              <div className="card-content">
                <div className='card-title'>
                  <h3>Android</h3>
                </div>
                <div className='card-body'>
                  <p>Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible. All non-Java virtual machine (JVM) languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code. </p>
                </div>
              </div>
              <div className='btn'>
                  <button>
                    <Link to='/Android'> 
                      View content
                    </Link>
                  </button>
                </div>    
            </div>
            
            
            <div className='card-container'>
              <div className='image-container'>
                <img src = {'https://www.bluewinston.com/wp-content/uploads/2019/01/bw_dsa-800x419.png.webp'} alt=''/>
              </div>
              <div className="card-content">
                <div className='card-title'>
                  <h3>Data Structures And Algorithms</h3>
                </div>
                <div className='card-body'>
                  <p>A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.</p>
                </div>
              </div>
              <div className='btn'>
              <button>
                    <a href="https://www.geeksforgeeks.org/data-structures/">Content</a>
                  </button>
                  <button>
                    <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">Algos</a>
                  </button>
                  <button>
                    <a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/">Questions</a>
                  </button>
                </div>    
            </div>


            <div className='card-container'>
              <div className='image-container'>
                <img src = {'https://images.macrumors.com/article-new/2019/06/dark-mode-ios-13-collage-800x369.jpg'} alt=''/>
              </div>
              <div className="card-content">
                <div className='card-title'>
                  <h3>IOS</h3>
                </div>
                <div className='card-body'>
                  <p>An iOS developer is responsible for developing applications for mobile devices powered by Apple's iOS operating system. Ideally, a good iOS developer is proficient with one of the two programming languages for this platform: Objective-C or Swift also proficient in OOPs and with API request and JSON.</p>
                </div>
              </div>
              <div className='btn'>
                  <button>
                    <Link to='/Ios'>
                      View content
                    </Link>
                  </button>
                </div>    
            </div>
            

            <div className='card-container'>
              <div className='image-container'>
                <img src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIWjmEzHXeYmGbdVUKnX3myUgXvdclm2NP8rxAXUJYHmA_ctLDmx1ZuThmCqQWL1igUA&usqp=CAU'} alt=''/>
              </div>
              <div className="card-content">
                <div className='card-title'>
                  <h3>Web Dev</h3>
                </div>
                <div className='card-body'>
                  <p>HTML is a markup language. It provides the structure of a website so that web browsers know what to show, CSS is a Cascading Style Sheet. CSS let’s web designers change colors, fonts, animations, and transitions on the web. They make the web look good, Javascript - used by all backend work.</p>
                </div>
              </div>
              <div className='btn'>
                  <button>
                    <Link to='/Webdev'>
                      View content
                    </Link>
                  </button>
                </div>    
            </div>
          </div>
          <div className="cards">
            <div className='card-container'>
              <div className='image-container'>
                <img src = {'data:image/png;base64,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'} alt=''/>
              </div>
              <div className="card-content">
                <div className='card-title'>
                  <h3>ICPC</h3>
                </div>
                <div className='card-body'>
                  <p>The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. </p>
                </div>
              </div>
              <div className='btn'>
                  <button>
                    <a href="https://www.codechef.com/icpc">Details</a>
                  </button>
                  <button>
                    <a href="https://icpc.global/">Official Site</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=e21q59cAvYg">Video</a>
                  </button>
                </div>    
            </div>
            
            
            <div className='card-container'>
              <div className='image-container'>
                <img src = {'data:image/png;base64,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'} alt=''/>
              </div>
              <div className="card-content">
                <div className='card-title'>
                  <h3>GS0C</h3>
                </div>
                <div className='card-body'>
                  <p>We are pleased to announce that in 2022 we’re broadening our scope of Google Summer of Code (GSoC) with exciting new updates to the program.For 17 years, GSoC has focused on bringing new open source contributors into OSS communities big and small. GSoC has brought over 18,000 university students from 112 countries together with over 17K mentors from 746 open source organizations.</p>
                </div>
              </div>
              <div className='btn'>
                  <button>
                    <a href="https://google.github.io/gsocguides/student/">Details</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=2U5ZoUVfJLw">Video</a>
                  </button>
                </div>    
            </div>
            </div>
      </div>
      
    );
  }

export default Homepage;
