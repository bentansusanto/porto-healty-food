import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AboutProps {
    about : AboutContent,
    mobile : boolean
}

interface AboutContent{
    subtitle : string,
    title : string,
    content : string,
    image : string
}

const AboutSection : React.FC<AboutProps> = (props) => {
  return (
    <div className='mb-40'>
      <div className={`${props.mobile ? "block mx-5 space-y-5" : "flex mx-32 items-center"} flex-row-reverse`}>
        <Image src={props.about.image} alt=""/>
        <div className='space-y-2'>
            <p className='text-orange font-semibold text-[.9rem]'>{props.about.subtitle}</p>
            <h1 className={`${props.mobile ? "text-[2.5rem]" : "text-[4rem] w-[80%]"} font-vollkron font-semibold`}>{props.about.title}</h1>
            <p className={`${props.mobile ? "" : "w-[80%]"} text-[.9rem] text-gray pb-5`}>{props.about.content}</p>
            <button>
                <Link href={'/'} className="bg-hijau py-2.5 px-6 text-[.9rem] text-white">
                    Shop Now
                </Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
