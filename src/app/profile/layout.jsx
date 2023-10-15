import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='text-7xl pt-32 font-bold'>Profile</h1>
      {children}
    </div>
  )
}

export default Layout