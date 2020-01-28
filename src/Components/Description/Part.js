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
    console.log(this.props.api)
    //  fetch(this.props.api)
  }

  render(){
    return(
      <div className='part'>
         {}
      </div>
    )
  }
}

export default DatePart