import React from 'react'
import styles from './Menu.module.css'
import { useState, useEffect } from 'react';

const Menu = () => {
  const [Mobile, setMobile] = useState(false);

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const mediaQuery = matchMedia('(max-width : 599px)');

      const handleMediaQuery = (event : MediaQueryListEvent) =>{
        setMobile(event.matches);
      }

      mediaQuery.addListener(handleMediaQuery);

      return() => {
          mediaQuery.removeListener(handleMediaQuery);
      }
    }
  }, [])

  return (
    <div className='mb-20 md:mb-40'>
      <div className={styles.menu}>
        <h1 className={`${Mobile ? "py-48 text-[2.5rem]" : "py-48 text-[3rem] w-[35%] mx-auto"} text-white font-vollkron text-center`}>Choose Healthy Foods That You Like</h1>
      </div>
    </div>
  )
}

export default Menu
