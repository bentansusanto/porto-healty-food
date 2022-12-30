import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";

const HeroContent = {
  promo: "Sall Top 20% Off",
  title: "Will Give You Satisfaction in Food",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet harum aperiam fuga velit quisquam facilis corporis dolorem, soluta consectetur veniam.",
  image: "bg-hero.svg",
};

const Service = [
  {
    title : 'Free Shipping',
    content : 'Orders over $140',
    icon : require('../../public/assets/shipping.svg')
  },
  {
    title : 'Quick Payment',
    content : '100% secure payment',
    icon : require('../../public/assets/payment.svg')
  },
  {
    title : 'Special Promo',
    content : 'Get special promo',
    icon : require('../../public/assets/promo.svg')
  },
  {
    title : '24/7 Support',
    content : 'Ready support',
    icon : require('../../public/assets/support.svg')
  },
]

function Homepage() {
  const [Mobile, setMobile] = useState(false);
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
    <>
      <HeroSection hero={HeroContent} mobile={Mobile} />
      <ServiceSection service={Service} mobile={Mobile}/>
    </>
  );
}

export default Homepage;
