import React from 'react'
import Image from 'next/image';
import Star from '../../../public/assets/Star.svg'
import {IoMdAdd} from 'react-icons/io'
import Link from 'next/link';
interface MenuProps {
    menu : MenuContent;
    mobile : boolean;
    data : Menu[];
    loading : boolean;
}

interface MenuContent{
    subtitle : string;
    title : string;
    content : string;
}

interface Menu { 
  title : string;
  image : string ;
  rating : number;
  category : string;
  price : number;
  sort_desc : string;
}


const MenuSection : React.FC<MenuProps> = (props) => {
 
  return (
    <div className='mb-40'>
      <div>
        {/* Content */}
        <div className={`${props.mobile ? "mx-5" : "mx-20"} space-y-2`}>
            <p className='text-orange font-semibold text-[.9rem]'>{props.menu.subtitle}</p>
            <h1 className={`${props.mobile ? "text-[2.5rem]" : "text-[4rem] w-[40%]"} font-vollkron font-semibold`}>{props.menu.title}</h1>
            <p className={`${props.mobile ? "" : "w-[30%]"} text-[.9rem] text-gray pb-5`}>{props.menu.content}</p>
        </div>
        {/* Category */}
        <div className='flex space-x-10 justify-center cursor-pointer mt-10'>
          <p>All Product</p>
          <p>Fast Food</p>
          <p>Healty Food</p>
        </div>
        <div className={`${props.mobile ? "grid-cols-2 gap-y-5" : "grid-cols-4 mx-32 gap-y-5"} grid justify-items-center mt-14 `}>
          {
            props.data.map((val,idx) => (
              <div key={idx} className="space-y-3 mx-5">
                <Image src={val.image} alt="" width={350} height={350}/>
                <div className='flex items-center'>
                  <h4 className='w-[70%] font-semibold'>{val.title}</h4>
                  <div className='flex space-x-1 ml-auto'>
                  <Image src={Star} alt=""/>
                  <p className='text-[.9rem]'>{val.rating}</p>
                  </div>
                </div>
                <p className='text-[.8rem] text-gray'>{val.sort_desc}</p>
                <div>
                  <div className='flex items-center'>
                    <button className='flex items-center space-x-2  bg-hijau py-1.5 px-4 rounded-md text-[.9rem] text-white'>
                      <p className='text-lg'>
                        <IoMdAdd/>
                      </p>
                      <p>Add</p>
                      </button>
                    <p className={`${props.mobile ? "text-[1rem]" : "text-[1.1rem]"} ml-auto font-semibold`}>$ {val.price}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <button className='flex mx-auto mt-10 bg-hijau py-2.5 px-6 text-[.9rem] rounded-sm text-white'>
          <Link href={'/'}>
            Show more
          </Link>
        </button>
      </div>
    </div>
  )
}

export default MenuSection
