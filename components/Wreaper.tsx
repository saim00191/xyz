import React from 'react'

const Wreaper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='px-[50px]'>
        { children }
    </div>
  )
}

export default Wreaper