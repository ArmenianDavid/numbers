import React from 'react'

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
         <h2 className='part-title'>{this.props.title}</h2>
         <div className='part-box'>
            <div className='box-link'>numbersapi.com/{this.props.api}</div>
            <div className='box-text'>{this.state.data}</div>
         </div>
      </div>
    )
  }
}

export default DatePart