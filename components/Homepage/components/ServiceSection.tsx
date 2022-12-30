import React from 'react'
import Image from 'next/image'
interface serviceProps{
    service : serviceContent[],
    mobile : boolean
}

interface serviceContent{
        title : string,
        content : string,
        icon : string
}

const ServiceSection : React.FC<serviceProps> = (props) =>  {
  return (
    <div>
      <div className={`${props.mobile ? "grid-cols-2" : "grid-cols-4 gap-5 mx-20"} grid justify-items-center mt-20`}>
        {
            props.service.map((val,idx) => (
                <div key={idx} className={`${props.mobile ? "block" : "flex items-center space-x-5"}`}>
                    {/* image */}
                    <div className="bg-orangemuda p-5">
                     <Image src={val.icon} alt="{val.title}"/>
                    </div>
                    <div>
                        <h4>{val.title}</h4>
                        <p className='text-[.8rem] text-gray'>{val.content}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ServiceSection
