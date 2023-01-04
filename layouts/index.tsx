import React, {ReactNode} from 'react'
import Navbar from '../components/Navbar'

interface LayoutProps{
    children : ReactNode
}

export default function index(props : LayoutProps) {
    const {children} = props;
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}
