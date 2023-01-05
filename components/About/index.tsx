import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";

const Hero = {
  subtitle: "About Us",
  title: "The More Healthy Food The Better",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellendus dolores. Reprehenderit dignissimos sed, mollitia blanditiis maiores quam.",
  image: require("../../public/assets/bg-about.svg"),
};

const Team = {
  subtitle : 'Our Team',
  title : 'Our Best Team in JXBFood',
  content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellendus dolores.'
}

const Teams = [
  {
    name : 'Benny Tan Susanto',
    role : 'CEO JXB Food',
    foto : require('../../public/assets/ceo.svg')
  },
  {
    name : 'Benny Tan Susanto',
    role : 'Executive Chef',
    foto : require('../../public/assets/chef.svg')
  },
  {
    name : 'Benny Tan Susanto',
    role : 'CMO JXB Food',
    foto : require('../../public/assets/cmo.svg')
  },
  {
    name : 'Benny Tan Susanto',
    role : 'GM JXB Food',
    foto : require('../../public/assets/gm.svg')
  }
]

const About = () => {
  const [Mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width : 599px)");

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
      <HeroSection hero={Hero} mobile={Mobile} />
      <TeamSection mobile={Mobile} team={Team} teams={Teams}/>
    </div>
  );
};

export default About;
