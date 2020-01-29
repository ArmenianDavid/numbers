import React from 'react';
import './Part.css';

class DatePart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading : false,
      data : '',
    }
  }

  componentDidMount(){
    fetch('http://numbersapi.com/'+this.props.api)
     .then( resp => resp.text())
     .then( text => this.setState({ data : text}))
  }


  render(){
    return(
      <div className='part'>
         <div className='part-title-container'>
           <div>
              <h2 className='part-title'>{this.props.title}</h2>
           </div>
         </div>
         <div className='part-box'>
           <div className='box-link-container'>
             <div className='box-link'>numbersapi.com/{this.props.api}</div>
           </div> 
           <div className='box-text-container'>
             <div className='box-text'>{this.state.data}</div>
           </div>
         </div>
      </div>
    )
  }
}

export default DatePart