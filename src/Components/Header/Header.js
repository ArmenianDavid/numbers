import React from 'react'

const Header = (props) =>{
  return(
          <div className='header-container'>
             <h1 className='header-title'>{props.title}</h1>
             <h2 className='header-description'>{props.description}</h2>
          </div>
  )
}

export default Header