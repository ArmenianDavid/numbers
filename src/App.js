import React from 'react';
import './App.css';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import Part from './Components/Description/Part';

class App extends React.Component{
  render(){
    return (
    <div className='body-inner'>
       <div className='body-container'>
          <Header title='numbers' description='What tales do your metrics tell?' />
          <div className='work-descripton-container'>
            <Part api='numbersapi.com/5/math' />
            <Part api='numbersapi.com/15'  />
            <Part api='numbersapi.com/2/28/date' />
          </div>
       </div>
    </div>
    ); 
  }
 
}

export default App;
