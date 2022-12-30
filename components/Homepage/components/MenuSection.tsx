import React from 'react'

interface MenuProps {
    menu : MenuContent,
    mobile : boolean
}

interface MenuContent{
    subtitle : string,
    title : string,
    content : string
}

const MenuSection : React.FC<MenuProps> = (props) => {
  return (
    <div className='mb-40'>
      <div>
        {/* Content */}
        <div className={`${props.mobile ? "mx-6" : "mx-20"} space-y-2`}>
            <p className='text-orange font-semibold text-[.9rem]'>{props.menu.subtitle}</p>
            <h1 className={`${props.mobile ? "text-[2.5rem]" : "text-[4rem] w-[40%]"} font-vollkron font-semibold`}>{props.menu.title}</h1>
            <p className={`${props.mobile ? "" : "w-[30%]"} text-[.9rem] text-gray pb-5`}>{props.menu.content}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuSection
