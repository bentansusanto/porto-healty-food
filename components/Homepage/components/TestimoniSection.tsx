import React from 'react'
import Image from 'next/image';
import Star from '../../../public/assets/Star.svg'

interface TestimoniProps{
    testimoni : TestimoniContent;
    testimonis : Testimoni[];
    mobile : boolean
}

interface TestimoniContent {
    subtitle : string;
    title : string;
    image: string;
}

interface Testimoni{
    name : string;
    job : string;
    rating : number;
    message : string;
    foto : string;
}

const TestimoniSection :React.FC<TestimoniProps> = (props) => {
  return (
    <div className='mb-40'>
      <div className={`${props.mobile ? "block space-y-10" : "flex space-x-20 mx-32 items-center"}`}>
        <Image src={props.testimoni.image} alt=""/>
        {/* Content */}
        <div className={`${props.mobile ? "mx-5" : "mx-20"} space-y-2`}>
            <p className='text-[.9rem] text-orange font-semibold'>{props.testimoni.subtitle}</p>
            <h1 className={`${props.mobile ? "text-[2.5rem]" : "text-[4rem]"} font-vollkron font-semibold`}>{props.testimoni.title}</h1>
            {/* Testimoni */}
            <div>
                {
                    props.testimonis.map((val,idx) => (
                        <div key={idx}>
                            <div className='flex items-center space-x-5'>
                                <Image src={val.foto} alt="" className={`${props.mobile ? "w-[3rem]" : "w-[4rem]"}`}/>
                                {/* Name, and job */}
                                <div className='space-y-1'>
                                    <h4 className='text-[1.1rem] font-semibold'>{val.name}</h4>
                                    <p className='text-[.9rem] text-gray'>{val.job}</p>
                                </div>
                            </div>
                            <div className='space-y-3 mt-3'>
                                <p className='text-[.9rem]'>{val.message}</p>
                                <div className='flex space-x-2'>
                                    <Image src={Star} alt=""/>
                                    <p className='text-[.9rem]'>{val.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniSection
