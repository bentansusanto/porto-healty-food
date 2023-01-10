import React from 'react'
import styles from './Menu.module.css'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import menuIcon from '../../public/assets/menu.png'
import {BsChevronDown} from 'react-icons/bs'
import axios from 'axios';
import ListMenu from './components/ListMenu'


const Menu = () => {
  const [Mobile, setMobile] = useState(false);
  const [dataMenu, setDataMenu] = useState([]);
  const baseURL = 'http://localhost:5000'

  useEffect(() => {
    fetchMenu()
  },[])

  const fetchMenu = async() => {
      await axios.get(`${baseURL}/menu`)
      .then((response) => {
        console.log(response.data);
        setDataMenu(response.data);
      }).catch((err) => {
        console.log(err)
      });
  }

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
    <div className='mb-40'>
      <div className={styles.menu}>
        <h1 className={`${Mobile ? "text-[2rem] pt-44" : "text-[3rem] w-[35%] mx-auto py-40"} text-white text-center font-vollkron`}>Choose Healthy Foods That You Like</h1>
      </div>

      {/* Content */}
      <div className={`${Mobile ? "mx-6" : "mx-20"} bg-[#f8f8f8] w-auto h-[4rem] mt-10`}>
        {
          Mobile ? 
          (<div className='flex items-center px-2'>
            {/* Category */}
            <div>
              <div className='flex items-center space-x-3 py-4'>
                <Image src={menuIcon} alt="" className='w-[2rem]'/>
                <p>All Menu</p>
                <BsChevronDown/>
              </div>
              <div className='hidden'>
                <p>Healty food</p>
                <p>Fast Food</p>
              </div>
            </div>
            {/* Most recent */}
            <div className='ml-auto'>
                <button className='flex items-center space-x-3 bg-[#DADADA] py-2 px-2.5 rounded-sm'>
                  <p>Most Recent</p>
                  <BsChevronDown/>
                </button>
            </div>
          </div>) : 
          (<div className='flex items-center px-5 py-[.5rem]'>
            {/* Category */}
            <div className='flex items-center'>
              <Image src={menuIcon} alt="" className='w-9'/>
              <div className='flex space-x-10 ml-4'>
                <p>All Menu</p>
                <p>Healty Food</p>
                <p>Fast Food</p>
              </div>
            </div>
            {/* Most Recent */}
            <div className='ml-auto'>
            <button className='flex items-center space-x-3 bg-[#DADADA] py-3 px-2.5 rounded-sm'>
                <p>Most Recent</p>
                <BsChevronDown/>
              </button>
            </div>
          </div>)
        }
      </div>
      <ListMenu menu={dataMenu} mobile={Mobile}/>

    </div>
  )
}

export default Menu
