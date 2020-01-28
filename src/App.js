import React from 'react';
import './App.css';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import MathPart from './Components/Description/MathPart';
import TriviaPart from './Components/Description/TriviaPart';
import DatePart from './Components/Description/DatePart';

class App extends React.Component{
  render(){
    return (
    <div className='body-inner'>
       <div className='body-container'>
          <Header title='numbers' description='What tales do your metrics tell?' />
          <div className='work-descripton-container'>
            <MathPart />
            <TriviaPart />
            <DatePart />
          </div>
       </div>
    </div>
    ); 
  }
 
}

export default App;
