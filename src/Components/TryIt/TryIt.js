import React, { useState, useEffect } from 'react'
import './TryIt.css';

const TryIt = () => {
     const [ link , setLink ] = useState('6/math');
     const [ data , setData ] = useState('');
     const [ input , setInput ] = useState('')

  const handleChangeInput = (e) =>{
     setInput(e.target.value)
  }

  useEffect(() => {
    console.log('fetching')
      fetch(`http://numbersapi.com/${link}`)
          .then(res => {
              return  res.text();
          })
          .then(text => {
              setData(text);
              return text;
          });
  },[link]);

  const onEnter = (e) =>{
     e.persist();
     if(e.key === 'Enter'){
       setLink(input)
     }
  }

  
  return(
    <div className='try-container'>
        <div className='try'>
            <div className='left-div'>
              <div className='top-part'>
                <div>
                  <span>numbersapi.com/</span><input 
                                    type='text' 
                                    defaultValue={link} 
                                    onChange={handleChangeInput} 
                                    onKeyDown={(e) => onEnter(e)} />
                </div>
              </div>
              <div className='bottom-part'>
                  <div>{data}</div>
              </div>
            </div>


            <div className='right-div'>

            </div>
        </div>
    </div>
  )
}

export default TryIt