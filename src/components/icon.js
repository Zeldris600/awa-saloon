import React from 'react'


const Icon = ({icon,name}) => {
  return (
    <div className='icon-box'>
        <span className='icon'>{icon}</span>
        <span className='icon-name'>{name}</span>
    </div>
  )
}

export default Icon