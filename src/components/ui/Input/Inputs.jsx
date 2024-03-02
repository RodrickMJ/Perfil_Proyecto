import React from 'react'

function Inputs({type,placeholder}) {
  return (
    <>
        <input className='search-input' type={type} placeholder={placeholder} />
    </>
  )
}

export default Inputs