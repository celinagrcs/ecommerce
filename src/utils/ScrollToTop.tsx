import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect (() => {
      console.log("Cambiando de ruta:", pathname); 
    if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    }
  
  }, [pathname])

    return null;
}


  
export default ScrollToTop