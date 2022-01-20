import { useState } from 'react';
import React from 'react'
import './Android.css'
import { Link } from 'react-router-dom'
//import axios from 'axios';
//import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
//import DSA from "./components/DSA.js"
//import Bargraph from "./components/Bargraph.js"
//import Linechart from "./components/Linechart"



function Android() {
    return (
      <div> 
        <h2 style={{marginLeft:"50px", fontSize:"50px"}}>Languages</h2>
        <div className="Cards">
          <div className="kotlin">
              <h2>JAVA</h2>
              <img src = {'https://www.oracle.com/oce/press/assets/CONT6C95347B9ECC40CF8E7272A74FD80BDE/native/rc24-java-logo.gif'} alt=''/>
              <div className='btn'>
                  <button>
                    <a href="https://www.javatpoint.com/java-tutorial">Free Info</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=VaMWsm6CFss">Course</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q">Video</a>
                  </button>
                </div>    
          </div>
          <div className="kotlin">
              <h2>Kotlin</h2>
              <img src = {'data:image/png;base64,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'} alt=''/>
              <div className='btn'>
                  <button>
                  <a href="https://www.tutorialspoint.com/kotlin/index.htm">Free Info</a>
                  </button>
                  <button>
                  <a href="https://developer.android.com/courses?gclid=Cj0KCQiA2ZCOBhDiARIsAMRfv9K6p2vsSVKFc1uhwJFeKBUhAgbROND2GuvRw0TML4Q1xDBRMCOLaYsaAo7AEALw_wcB&gclsrc=aw.ds">Course</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=fBYqeS5dHzI&list=PLQmdvqrXE6eLVIR4wMMt1xQRKtTXcL7Gs">Video</a>
                  </button>
                </div>  
          </div>
        </div>

        <h2 style={{marginLeft:"50px", marginTop:"40px", fontSize:"50px"}}>Pre-Reqeuisites</h2>
        <div className="Cards2">
          <div className="precards">
              <h2>Interface</h2>
              <div className='btn'>
                 <button>
                    <a href="https://www.javatpoint.com/interface-in-java">Content</a>
                  </button>
                  <button>
                    <a href="https://www.youtube.com/watch?v=VYhmL038G1I">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Override</h2>
              <div className='btn'>
              <button>
              <a href="https://abhiandroid.com/java/method-overriding">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=fnEpwig1ybE">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Callbacks</h2>
              <div className='btn'>
              <button>
              <a href="">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=m83fZfENiDg">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Lambdas</h2>
              <div className='btn'>
              <button>
              <a href="https://stackoverflow.com/questions/51188559/how-to-use-lambda-expression-in-android">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=yb46iD5dJYY">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Collections</h2>
              <div className='btn'>
              <button>
              <a href="https://www.javatpoint.com/collections-in-java">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=rzA7UJ-hQn4">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Generics</h2>
              <div className='btn'>
              <button>
              <a href="https://www.javatpoint.com/generics-in-java">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=BsBK3UZ0RGM">Video</a>
                  </button>
                </div>  
          </div>
        </div>


        <h2 style={{marginLeft:"50px" , fontSize:"50px"}}>Components</h2>
        <p style={{marginLeft:"50px"}}>Application components are the essential building blocks of an Android Aplication. These components are loosely coupled by the application manifest file AndroidManifest.xml that describes each component of the application and how they interact.</p>

        <h2 style={{marginLeft:"50px" , fontSize:"50px"}}>Layouts UI</h2>
        <div className="Cards2">
          <div className="precards">
              <h2>Frame</h2>
              <div className='btn'>
              <button>
              <a href="https://abhiandroid.com/ui/framelayout">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=XiL3ulAn29o">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Linear</h2>
              <div className='btn'>
              <button>
              <a href="https://developer.android.com/guide/topics/ui/layout/linear">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=ylPHePaZ0K8">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Relative</h2>
              <div className='btn'>
              <button>
              <a href="https://developer.android.com/guide/topics/ui/layout/relative">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=gkh-5pmYEa0">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Constraints</h2>
              <div className='btn'>
              <button>
              <a href="">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=4N4bCdyGcUc">Video</a>
                  </button>
                </div>    
          </div>
        </div>



        <h2 style={{marginLeft:"50px", fontSize:"50px"}}>View Elements</h2>
        <div className="Cards2">
          <div className="precards">
              <h2>textView</h2>
              <div className='btn'>
              <button>
              <a href="https://abhiandroid.com/ui/textview">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=NSM3DbgJ0tw">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Buttons</h2>
              <div className='btn'>
              <button>
              <a href="https://www.javatpoint.com/android-working-with-button">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=aE5f1tV5nU4">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>EditText</h2>
              <div className='btn'>
              <button>
              <a href="https://www.tutlane.com/tutorial/android/android-edittext-with-examples">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=BO5iCL7U6Lc">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>ImageView</h2>
              <div className='btn'>
              <button>
              <a href="https://developer.android.com/reference/android/widget/ImageView">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=hPjAnRqtK-E">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Intents</h2>
              <div className='btn'>
              <button>
              <a href="https://www.javatpoint.com/android-intent-tutorial">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=4AG-h-zoY4g">Video</a>
                  </button>
                </div>    
          </div>
        </div>





        <h2 style={{marginLeft:"50px" , fontSize:"50px"}}>Complex UI</h2>
        <div className="Cards2">
          <div className="precards">
              <h2>List view</h2>
              <div className='btn'>
              <button>
              <a href="https://www.geeksforgeeks.org/android-listview-in-java-with-example/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=NhiUTjm2BrE">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Recycle View</h2>
              <div className='btn'>
              <button>
              <a href="https://www.geeksforgeeks.org/android-recyclerview/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=PSIQ-L8_Cxk">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Dialogs</h2>
              <div className='btn'>
              <button>
              <a href="https://www.geeksforgeeks.org/android-alert-dialog-box-and-how-to-create-it/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=ARezg1D9Zd0">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Toast</h2>
              <div className='btn'>
              <button>
              <a href="https://developer.android.com/guide/topics/ui/notifiers/toasts#java">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=7CPHaMWbZhI">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Bottom Sheet</h2>
              <div className='btn'>
              <button>
              <a href="https://www.geeksforgeeks.org/modal-bottom-sheet-in-android-with-examples/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=bXzNIUKYHF0">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Drawer</h2>
              <div className='btn'>
              <button>
              <a href="https://www.geeksforgeeks.org/navigation-drawer-in-android/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=C9gIPu60m1c">Video</a>
                  </button>
                </div>    
          </div>
        </div>
        <div className="precards" style={{marginTop:"20px"}}>
              <h2>View Pager</h2>
              <div className='btn'>
              <button>
              <a href="https://www.journaldev.com/10096/android-viewpager-example-tutorial">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=5-RWOvJ9oq8">Video</a>
                  </button>
                </div>    
          </div>



        <h2 style={{marginLeft:"50px", fontSize:"50px"}}>Networking</h2>
        <div className="Cards2">
          <div className="precards">
              <h2>OkHTTP</h2>
              <div className='btn'>
              <button>
              <a href="https://square.github.io/okhttp/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=OD5kll9JTDI">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Gradle</h2>
              <div className='btn'>
                  <button>
                  <a href="https://www.geeksforgeeks.org/android-build-gradle/">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=vJQoFFvnEJM">Video</a>
                  </button>
                </div>    
          </div>
        </div>



        <h2 style={{marginLeft:"50px" , fontSize:"50px"}}>Media</h2>
        <div className="Cards2">
          <div className="precards">
              <h2>Play Audio</h2>
              <div className='btn'>
              <button>
              <a href="https://www.javatpoint.com/playing-audio-in-android-example">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=C_Ka7cKwXW0">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>BG play</h2>
              <div className='btn'>
              <button>
              <a href="https://stackoverflow.com/questions/21043059/play-background-sound-in-android-applications">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=p2ffzsCqrs8">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Video View</h2>
              <div className='btn'>
              <button>
              <a href="https://stackoverflow.com/questions/3263736/playing-a-video-in-videoview-in-android">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=xe2FIhvotHc">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Take Photo</h2>
              <div className='btn'>
              <button>
              <a href="https://developer.android.com/training/camera/photobasics">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/watch?v=RaOyw84625w">Video</a>
                  </button>
                </div>    
          </div>
          <div className="precards">
              <h2>Record Video</h2>
              <div className='btn'>
                  <button>
                  <a href="https://developer.android.com/training/camera/videobasics">Content</a>
                  </button>
                  <button>
                  <a href="https://www.youtube.com/results?search_query=record+video+in+android+studio">Video</a>
                  </button>
                </div>    
          </div>
        </div>
        <div style={{height:"50px"}}>

        </div>
      </div>
    );
  }

export default Android;
