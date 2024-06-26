import React from "react";
import Style from "./style.module.css";
import Btn from "../components/Btn";
import { Span } from "next/dist/trace";

const HomePage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.homeContent}>
        <div className={Style.textContent}>
            <Btn content={` Want to know more about dubai attractions`} path={'/places'} btnStyle={{margin:'auto' , fontSize: '50px'}}  />
        </div>
        <div className={Style.shapeContainer}>
            <div className={Style.planeImage}></div>
          <div className={Style.shape}></div>
          <Btn content={'About me'} btnClassName={' btn btn-neutral text-white absolute  bottom-0 right-0'} path='/about' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
