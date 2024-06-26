import React from "react";
import Styles from "./style.module.css";
import { socialData } from "./socialData";
import SocialIcons from "../components/SocialIcons";
import Btn from "../components/Btn";


const About = () => {
  return (
    <div className={Styles.aboutContainer}>
      <div className={Styles.aboutContent}>
        Hello Jadwelny Team,
        <br /> 
       <p className="mt-8"> I&apos;m a junior frontend developer passionate about creating visually
        appealing and user-friendly websites. I bring a solid understanding of
        HTML, CSS, and JavaScript, eager to grow and contribute to innovative
        projects.</p>
            <div className=" flex items-center justify-around mt-10 m-auto w-1/4 max-md:w-3/4 bg-slate-400">
              {socialData.map((ele:any, index:any) => (
                <SocialIcons
                  key={index}
                  path={ele.path}
                  iconSvg={ele.iconSvg}
                  widthStyle={ele.widthStyle}
                />
              ))}
            </div>
          

      </div>
      <Btn content={'Home'} btnClassName={' btn btn-neutral text-white w-32 mt-5'} path='/' />

    </div>
  );
};

export default About;
