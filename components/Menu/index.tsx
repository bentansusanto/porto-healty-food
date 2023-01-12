import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import menuIcon from "../../public/assets/menu.png";
import ListMenu from "./components/ListMenu";
import styles from "./Menu.module.css";


interface listMenu{
  title: string;
  category : string;
  price: string;
  rating: string;
  image: string;
  sort_desc: string;
}


const Menu = () => {
  const [Mobile, setMobile] = useState(false);
  const [dataMenus, setDataMenu] = useState<listMenu[]>([]);
  const baseURL = "http://localhost:5000";
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [category, setCategory] = useState<string>("")
  const [price, setPrice] = useState<number | string>("")
  const [rating, setRating] = useState< number |string>("")
  const [filterMenu, setFilterMenu] = useState<listMenu[]>([])

  // fetch menu
  const fetchMenu = async () => {
    await axios
      .get(`${baseURL}/menu`)
      .then((response) => {
        // console.log(response.data);
        setDataMenu(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  // filter menu by category
  useEffect(() => {
    if(category == ""){
      setFilterMenu(dataMenus);
    }else{
      setFilterMenu(dataMenus.filter((data) => data.category === category))
    }
  }, [dataMenus, category])

  //filter by high price and low price
  useEffect(() => {
    if(price === "" && rating === ""){
      setFilterMenu(dataMenus);
    }else if(price === 'low'){
        setFilterMenu(dataMenus.filter((data) => data.price <= price));
    }else if(rating === 'low'){
      setFilterMenu(dataMenus.filter((data) => data.rating < rating))
    }
  },[price, rating, dataMenus]) 


  const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
      setCategory(e.currentTarget.value);
  }


  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = matchMedia("(max-width : 599px)");

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
    <div className="mb-40">
      <div className={styles.menu}>
        <h1
          className={`${
            Mobile ? "text-[2rem] pt-44" : "text-[3rem] w-[35%] mx-auto py-40"
          } text-white text-center font-vollkron`}
        >
          Choose Healthy Foods That You Like
        </h1>
      </div>

      {/* Content */}
      <div
        className={`${
          Mobile ? "mx-6" : "mx-20"
        } bg-[#f8f8f8] w-auto h-[4rem] mt-10`}
      >
        {Mobile ? (
          <div className="flex items-center px-2">
            {/* Category */}
            <div className="relative">
              <div
                className="flex items-center space-x-3 py-4"
              >
                <Image src={menuIcon} alt="" className="w-[2rem]" />
                <p>
                  <button value={""} onClick={handleClick}>All Menu</button>
                </p>
                <BsChevronDown onClick={() => setOpenCategory(!openCategory)}/>
              </div>
              {openCategory && (
                <ul className="bg-[#dadada] absolute z-20 mt-2 py-2.5 px-3 space-y-3 w-full rounded-sm">
                  <li>
                    <button value={'Healty Food'} onClick={handleClick}>Healty Food</button>
                  </li>
                  <li>
                    <button value={'Fast Food'} onClick={handleClick}>Fast Food</button>
                  </li>
                </ul>
              )}
            </div>
            {/* Most recent */}
            <div className="ml-auto relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-3 bg-[#DADADA] py-2 px-2.5 rounded-sm"
              >
                <p>Most Recent</p> 
                <BsChevronDown /> 
              </button>
              {open && (
                <ul className="bg-[#dadada] absolute z-20 mt-5 py-2.5 px-3 space-y-3 w-full">
                  <li>
                    <button onClick={() => setPrice('low')}>Low Price</button>
                    </li>
                  <li>
                    <button>High Price</button>
                    </li>
                  <li>
                    <button>Low Rating</button>
                    </li>
                  <li>
                    <button>High Rating</button>
                    </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center px-5 py-[.5rem]">
            {/* Category */}
            <div className="flex items-center">
              <Image src={menuIcon} alt="" className="w-9" />
              <div className="flex space-x-10 ml-4">
                <p>
                  <button onClick={handleClick} value={""}>All Menu</button>
                  </p>
                <p>
                  <button onClick={handleClick} value={'Healty Food'}>Healty Food</button>
                  </p>
                <p>
                  <button onClick={handleClick} value={'Fast Food'}>Fast Food</button>
                  </p>
              </div>
            </div>
            {/* Most Recent */}
            <div className="ml-auto relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-3 bg-[#DADADA] py-3 px-2.5 rounded-sm"
              >
                <p>Most Recent</p>
                <BsChevronDown />
              </button>

              {/* Dropdown */}
              {open && (
                <ul
                  className={`bg-[#dadada] py-2.5 px-3 z-20 absolute mt-2 w-full rounded-sm space-y-3 cursor-pointer`}
                >
                 <li>
                    <button>Low Price</button>
                    </li>
                  <li>
                    <button>High Price</button>
                    </li>
                  <li>
                    <button>Low Rating</button>
                    </li>
                  <li>
                    <button>High Rating</button>
                    </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <ListMenu menu={filterMenu} mobile={Mobile} />
    </div>
  );
};

export default Menu;
