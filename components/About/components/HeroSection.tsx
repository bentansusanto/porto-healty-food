import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface heroProps{
    hero : heroContent;
    mobile : boolean;
}

interface heroContent{
    subtitle : string;
    title : string;
    content : string;
    image : string;
}

const HeroSection : React.FC<heroProps> = (props) => {
  return (
    <div className='mb-20 md:mb-40'>
      <div className={`${props.mobile ? "block mx-6" : "mx-32 flex mt-20"} flex-row-reverse`}>
        <Image src={props.hero.image} alt=""/>
        {/* Content */}
        <div className='space-y-3 mt-5'>
            <p className='text-orange font-semibold'>{props.hero.subtitle}</p>
            <h1 className={`${props.mobile ? "text-[2rem]" : "text-[4rem] w-[80%]"} font-vollkron font-semibold`}>{props.hero.title}</h1>
            <p className={`${props.mobile ? "" : "w-[70%]"} text-gray pb-3`}>{props.hero.content}</p>
            <button className='text-[.9rem] bg-hijau py-2 px-6 rounded-sm text-white'>
                <Link href={'/'}>
                    Shop now
                </Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
