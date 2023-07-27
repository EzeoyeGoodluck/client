import React from 'react'

const Switch = () => {
  return (
    <label className='relative w-20 h-10 bg-gray-200  rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-500 ml-20'>
        <input type="checkbox"  className='sr-only peer '/>
        <span className='w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-white 
        peer-checked:left-11 transition-all duration-500'/>
    
    </label>
  )
}

export default Switch
