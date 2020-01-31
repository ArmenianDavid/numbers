import React, { useState, useEffect } from 'react'

const TryIt = () => {
  // const { value , setValue } = useState('/2/math')
     const [ link , setLink ] = useState('6/math');
     const [ data , setData ] = useState('');
     const [ input , setInput ] = useState('')

  const handleChangeInput = (e) =>{
     setInput(e.target.value)
     console.log(input)
  }

  useEffect(() => {
      console.log(link)
      fetch(`http://numbersapi.com/${link}`)
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

  const onEnter = (e) =>{
     e.persist();
     console.log(e)
     if(e.key === 'Enter'){
       console.log(input)
       setLink(input)
     }
  }
  console.log('data' , data )
  console.log('input ', input )
  console.log('link' , link);
  return(
    <div className='try-container'>
      <div className='try'>
        <div className='left-div'>
           <div className='top-part'>
             <div>
               numbersapi.com/<input 
                                 type='text' 
                                 defaultValue={link} 
                                 onChange={handleChangeInput} 
                                 onKeyDown={(e) => onEnter(e)} />
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