import React, { useState, useEffect } from 'react'

const TryIt = () => {
  // const { value , setValue } = useState('/2/math')
     const [ link , setLink ] = useState('');
     const [ data , setData ] = useState('');

  const handleChangeInput = (e) =>{
     setLink('numbersapi.com/'+e.target.value)
  }

  useEffect(() => {
      fetch("http://numbersapi.com/6/math")
          .then(res => {
              console.log(res);
              return  res.text();
          })
          .then(text => {
              console.log(text);
              setData(text);
              return text;
          });
  },[]);

  return(
    <div className='try-container'>
      <div className='try'>
        <div className='left-div'>
           <div className='top-part'>
             <div>
               numbersapi.com/<input type='text' defaultValue='/2/math' onChange={handleChangeInput} />
             </div>
           </div>
           <div className='bottom-part'>
              {data}
           </div>
        </div>


        <div className='right-div'>

        </div>
      </div>
    </div>
  )
}

export default TryIt