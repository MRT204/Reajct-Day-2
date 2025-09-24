import React, { Component } from 'react'
import DdtEventComp from './components/DdtEventComp';
import DdtEventCompClass from './components/DdtEventCompClass';
import DdtEventForm1 from './components/DdtEventForm1';
import DdtEventForm2 from './components/DdtEventForm2';
import './App.css';

 class DdtApp extends Component {
  render() {
    return (
      <div className='container-border' >
            <h1 className='text-center'>Đỗ Đăng Tâm <br/> ReactJS - From - Event </h1>  
            <hr/>

            <DdtEventComp/>
            <hr/>
            <DdtEventCompClass/>
            <hr/>
            <DdtEventForm1/>
            <hr/>
            <DdtEventForm2/>
      </div>
    )
  }
}

export default DdtApp;