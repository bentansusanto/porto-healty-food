import React from "react";
import Image from "next/image";

interface teamProps {
  team: teamContent;
  mobile: boolean;
  teams: Team[];
}

interface teamContent {
  subtitle: string;
  title: string;
  content: string;
}

interface Team {
  name: string;
  role: string;
  foto: string;
}

const TeamSection: React.FC<teamProps> = (props) => {
  return (
    <div className="mb-20 md:mb-40">
      <div className={`${props.mobile ? "mx-6" : "mx-20"} space-y-3`}>
        <p className="text-orange font-semibold">{props.team.subtitle}</p>
        <h1
          className={`${
            props.mobile ? "text-[2rem]" : "text-[3rem] w-[40%]"
          } font-vollkron font-semibold`}
        >
          {props.team.title}
        </h1>
        <p className={`${props.mobile ? "" : "w-[30%]"} text-gray`}>{props.team.content}</p>
      </div>
      {/* Team */}
      <div className={`${props.mobile ? "grid-cols-2 gap-5 mx-6" : "grid-cols-4 mx-20"} grid mt-10`}>
          {
            props.teams.map((val,idx) => (
                <div key={idx} className="space-y-2">
                    <Image src={val.foto} alt=""/>
                    <div>
                        <h4 className={`${props.mobile ? "" : "text-[1.2rem]"} font-semibold`}>{val.name}</h4>
                        <p className="text-gray">{val.role}</p>
                    </div>
                </div>
            ))
          }
      </div>
    </div>
  );
};

export default TeamSection;
