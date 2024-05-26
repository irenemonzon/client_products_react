import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>Desde Layout</div>
        <Outlet/>
    </>
  )
}

export default Layout