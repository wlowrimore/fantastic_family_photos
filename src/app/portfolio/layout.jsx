import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='text-8xl font-bold'>Our Work</h1>
      {children}
    </div>
  )
}

export default Layout