import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import ServiceSection from "./components/ServiceSection";
import axios from 'axios'
import TestimoniSection from "./components/TestimoniSection";
import SubscribeSection from "./components/SubscribeSection";

const HeroContent = {
  promo: "Sall Top 20% Off",
  title: "Will Give You Satisfaction in Food",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet harum aperiam fuga velit quisquam facilis corporis dolorem, soluta consectetur veniam.",
  image: "bg-hero.svg",
};

const Service = [
  {
    title: "Free Shipping",
    content: "Orders over $140",
    icon: require("../../public/assets/shipping.svg"),
  },
  {
    title: "Quick Payment",
    content: "100% secure payment",
    icon: require("../../public/assets/payment.svg"),
  },
  {
    title: "Special Promo",
    content: "Get special promo",
    icon: require("../../public/assets/promo.svg"),
  },
  {
    title: "24/7 Support",
    content: "Ready support",
    icon: require("../../public/assets/support.svg"),
  },
];

const About = {
  subtitle: "About Us",
  title: "The More Healthy Food The Better",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellendus dolores. Reprehenderit dignissimos sed, mollitia blanditiis maiores quam.",
  image: require("../../public/assets/bg-about.svg"),
};

const Menu = {
  subtitle : 'Our Menu',
  title : 'Our Best Menu With Category',
  content : 'Lorem ipsum dolor sit amet, adipisicing elit officiis, repellendus dolores.'
}

const TestimoniContent = {
  subtitle : '- What they are say -',
  title : 'What they are says about us',
  image : require('../../public/assets/bg-testimoni.svg')
}

const Testimoni =[
  {
    name : 'Erick Smith',
    job : 'Food Vlogger',
    message : '"All service provided is so perfect and fast, and im so happy to order from this company"',
    rating : 4.9,
    foto : require('../../public/assets/erick-smith.svg')
  }
]

const Subscribe = {
  title : 'Get more discount if you order from us',
  content : 'Join with us then you must have get a discount and get promo from us to you , enjoy and happy to order.',
  image : require('../../public/assets/bg-subscribe.svg')
}

function Homepage() {
  const [Mobile, setMobile] = useState(false);
  const [Datas, setDatas] = useState([]);
  const baseURL = 'http://localhost:5000';
  const [loading, setLoading] = useState(true);

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

  // Fetch api
  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async() => {
      await axios.get(`${baseURL}/menu`)
      .then((response) => {
        console.log(response.data)
        setDatas(response.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }

  return (
    <>
      <HeroSection hero={HeroContent} mobile={Mobile} />
      <ServiceSection service={Service} mobile={Mobile} />
      <AboutSection about={About} mobile={Mobile} />
      <MenuSection menu={Menu} mobile={Mobile} data={Datas} loading={loading}/>
      <TestimoniSection testimoni={TestimoniContent} testimonis={Testimoni} mobile={Mobile}/>
      <SubscribeSection subscribe={Subscribe} mobile={Mobile}/>
    </>
  );
}

export default Homepage;
