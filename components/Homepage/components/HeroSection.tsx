import Image from "next/image";
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link';

interface heroProps {
  hero: heroContent; //hero : heroContent => bagian dari heroContent
  mobile: boolean;
}

interface heroContent {
  promo: string;
  title: string;
  content: string;
  image: string;
}

export const HeroSection: React.FC<heroProps> = (props) => {
  return (
    <div className={`${props.mobile ? "block px-6 space-y-4" : "flex px-20 space-x-14 mt-10"} mb-32`}>
      {/* Image */}
      <div>
        <Image
          src={require("../../../public/assets/" + props.hero.image)}
          alt=""
        />
      </div>
      {/* Content */}
      <div>
        <p className={`${props.mobile ? "text-[.9rem]" : "text-[.9rem]"} text-orange font-semibold`}>{props.hero.promo}</p>
        <h1 className={`${props.mobile ? "w-[90%] text-[2rem]" : "w-[80%] text-[4rem]"} font-vollkron font-semibold`}>{props.hero.title}</h1>
        <p className={`${props.mobile ? "" : "w-[70%]"} text-[.9rem] text-gray`}>{props.hero.content}</p>
        <div className="flex space-x-10 pt-8">
          <button className="bg-hijau text-[.9rem] px-6 py-2.5 rounded-sm text-white">Shop now</button>
          <Link href={'/blog'} className="flex items-center text-orange space-x-3">
            <p className="text-[.9rem] font-semibold">Explore Our Blogs</p>
            <p className="mt-1">
              <BsArrowRight/>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
