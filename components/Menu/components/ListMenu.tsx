import Image from "next/image";
import React from "react";
import Star from "../../../public/assets/Star.svg";
import {IoMdAdd} from 'react-icons/io'

interface listMenuProps {
  mobile: boolean;
  menu : listMenuContent[];
}

interface listMenuContent {
  title: string;
  category :string;
  price: string;
  rating: string;
  image: string;
  sort_desc: string;
}

const listMenu: React.FC<listMenuProps> = ({mobile, menu}) => {
  return (
    <div
      className={`${
        mobile ? "grid-cols-2 gap-x-5 mx-6" : "grid-cols-4 gap-x-10 mx-20"
      } grid  mt-5 gap-y-10 z-0 relative`}
    >
      {menu.map((val, idx) => (
        <div key={idx} className="space-y-2">
          <div className="relative">
            <Image src={val.image} alt="" width={350} height={350} />
            <div
              className={`${
                mobile ? "space-x-1 py-2.5" : "space-x-2  py-3"
              } absolute top-0 px-2.5 right-0 bg-[#F8F8F8] flex items-center ml-auto rounded-tl-lg rounded-br-lg shadow-md`}
            >
              <Image src={Star} alt="" className="w-4" />
              <p className={`${mobile ? "text-[.8rem]" : "text-[1rem]"}`}>
                {val.rating}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h4
              className={`${
                mobile ? "text-[.9rem]" : "text-[1rem]"
              } font-semibold`}
            >
              {val.title}
            </h4>
            <p
              className={`${
                mobile ? "text-[.8rem]" : "text-[.9rem]"
              } text-gray`}
            >
              {val.sort_desc}
            </p>
            <div className="flex items-center">
                <button className={`${mobile ? "px-2.5" : "px-3"} flex bg-hijau text-white items-center py-2 rounded-sm`}>
                    <IoMdAdd/>
                    <p>Add</p>
                </button>
                <p className={`${mobile ? "text-[.9rem]" : "text-[1.1rem]"} font-semibold ml-auto`}>$ {val.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default listMenu;
