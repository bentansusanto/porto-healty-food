import React from 'react'
import { useState, useEffect } from 'react';

const Footer = () => {
    const [Mobile, setMobile] = useState(false);

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const mediaQuery = window.matchMedia("(max-width: 599px)");

            const handleMediaQuery = (event: MediaQueryListEvent) => {
                setMobile(event.matches);
              };
        
              mediaQuery.addListener(handleMediaQuery);
        
              return () => {
                mediaQuery.removeListener(handleMediaQuery);
              };
        }
    }, [])

    
  return (
    <div>
        {
            Mobile ? "" : (<div> </div>)
        }
    </div>
  )
}

export default Footer
