import React, { Component } from 'react'
import NpmEventComp from './components/NpmEventComp';
import NpmEventCompClass from './components/NpmEventCompClass';
import NpmEventForm1 from './components/NpmEventForm1';
import NpmEventForm2 from './components/NpmEventForm2';
import './App.css';

 class NpmApp extends Component {
  render() {
    return (
      <div className='container-border' >
            <h1 className='text-center'>Nguyễn Phi Mạnh <br/> ReactJS - From - Event </h1>  
            <hr/>

            <NpmEventComp/>
            <hr/>
            <NpmEventCompClass/>
            <hr/>
            <NpmEventForm1/>
            <hr/>
            <NpmEventForm2/>
      </div>
    )
  }
}

export default NpmApp;