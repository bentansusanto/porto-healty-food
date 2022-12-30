import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaBlogger } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Cart from "../../public/assets/carticon.svg";
import Search from "../../public/assets/search.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  const [Mobile, setMobile] = useState(false);
  const link = [
    { page: "Homepage", link: "/", icon: <BiHomeSmile /> },
    { page: "Menu", link: "", icon: <MdOutlineRestaurantMenu /> },
    { page: "Blog", link: "/blog", icon: <FaBlogger /> },
  ];
  const [active, setActive] = useState(link[0].page)
  
  useEffect(() => {
    // checked window
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 599px)");

      const handleMediaQuery = (event: MediaQueryListEvent) => {
        setMobile(event.matches);
      };

      mediaQuery.addListener(handleMediaQuery);

      return () => {
        mediaQuery.removeListener(handleMediaQuery);
      };
    }
  }, []);


  return (
    <div>
      <nav className={styles.nav}>
        {/* logo */}
        <div>
          <Link href={"/"} className={styles.Logo}>
            JXB Food<span className="text-orange">.</span>
          </Link>
        </div>

        {/* Link */}
        <ul
          className={`${
            Mobile
              ? "bg-white w-full fixed bottom-0 rounded-sm ml-0 py-3 px-6 justify-center space-x-20 shadow-navMobile"
              : "ml-12 space-x-10"
          } flex `}
        >
          {link.map((val, idx) => (
            <li key={idx} className={`${val.page === active ? 'text-orange' : ''}`}
            onClick={(e) => {
                e.preventDefault()
                setActive(val.page)
              }}>
              <Link href={val.link}>
                {Mobile ? (
                  <p className="text-2xl text-gray-500">{val.icon}</p>
                ) : (
                  <p>{val.page}</p>
                )}
              </Link>
            </li>
          ))}
          <li className="text-2xl">{Mobile ? <CiUser /> : ''}</li>
        </ul>

        {/* Cart, Search, and Sign Up */}
        <div
          className={`${
            Mobile ? "space-x-5 mr-6" : "space-x-10"
          } flex items-center ml-auto`}
        >
          <div>
            <Image src={Search} alt="" className="w-4.5" />
          </div>
          <div className={styles.Cart}>
            <Image src={Cart} alt="" className="w-4.5" />
            <span className='bg-orange rounded-full py-1/4 px-1.5 text-[.8rem] absolute top-0 left-3'>0</span>
          </div>
          <div>
            {
                Mobile ?  '':(<button className={styles.signup}>Sign Up</button>) 
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
