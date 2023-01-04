import Image from "next/image";
import React from "react";
interface SubscribeProps {
  subscribe: SubscribeContent;
  mobile: boolean;
}

interface SubscribeContent {
  title: string;
  content: string;
  image: string;
}

const SubscribeSection: React.FC<SubscribeProps> = (props) => {
  return (
    <div className="mb-32">
      <div className={`${props.mobile ? "block mx-6 space-y-3" : "flex space-x-20 mx-32"}`}>
        <Image src={props.subscribe.image} alt="" />
        {/* Content */}
        <div className="space-y-3">
          <h1
            className={`${
              props.mobile ? "text-[2.3rem]" : "text-[3.5rem] w-[80%]"
            } font-vollkron font-semibold`}
          >
            {props.subscribe.title}
          </h1>
          <p
            className={`${
              props.mobile ? "" : "w-[70%]"
            } text-gray text-[.9rem]`}
          >
            {props.subscribe.content}
          </p>

          {/* form subscribe */}
          <div className=" pt-8 flex space-x-5">
            <div className="">
              <input
                type="text"
                placeholder="Enter your email"
                className={`${props.mobile ? "" : "w-[18rem]"} bg-[#FAFAFA] rounded-sm py-5 px-6 placeholder:text-[.9rem]`}
              />
            </div>
            <button className="bg-black text-white py-5 px-6 rounded-sm">Get</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
