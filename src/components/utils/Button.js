import React from 'react'

const buttonList=['Computer Programing', 'Music', 'News', 'Live','Mixes','Spice','Culinary Arts']

const Button = () => {
  return (
    <div>
        {buttonList.map((buttonName,i)=> <button key={i} className='p-2 px-5 m-2 bg-gray-200 rounded-lg font-semibold text-lg'>{buttonName}</button>)}
     
    </div>
  )
}

export default Button
