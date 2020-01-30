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
            <div className='work-descripton'>
              <Part api='5/math' title='math'/>
              <Part api='15' title='trivia'  />
              <Part api='2/28/date' title='date' />
            </div>
          </div>
       </div>
    </div>
    ); 
  }
 
}

export default App;
