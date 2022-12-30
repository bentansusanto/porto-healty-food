import Image from "next/image";
import React from "react";
interface serviceProps {
  service: serviceContent[];
  mobile: boolean;
}

interface serviceContent {
  title: string;
  content: string;
  icon: string;
}

const ServiceSection: React.FC<serviceProps> = (props) => {
  return (
    <div className="mb-40">
      <div
        className={`${
          props.mobile ? "" : "bg-[#a4a4a4] w-auto h-[.2px] mx-20"
        }`}
      />
      <div
        className={`${
          props.mobile ? "grid-cols-2 mx-6 gap-10" : "grid-cols-4 gap-5 mx-20"
        } grid justify-items-center mt-20`}
      >
        {props.service.map((val, idx) => (
          <div
            key={idx}
            className={`${
              props.mobile ? "block space-y-2" : "flex items-center space-x-5"
            }`}
          >
            {/* image */}
            <div
              className={`${
                props.mobile ? "mx-auto " : "p-5 bg-orangemuda rounded-md"
              }`}
            >
              <Image
                src={val.icon}
                alt="{val.title}"
                className={`${props.mobile ? "" : "w-6"}`}
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold">{val.title}</h4>
              <p className="text-[.8rem] text-gray">{val.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${
          props.mobile ? "" : "bg-[#a4a4a4] w-auto h-[.3px] mx-20 mt-20"
        }`}
      />
    </div>
  );
};

export default ServiceSection;
