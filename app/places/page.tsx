import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "./style.module.css";
import Cards from "../components/Cards";

async function getData(){
    const response = await fetch("https://webhook.site/085770b3-3445-4835-9389-433f5525b751");
    return response.json();
}


export default async function PlacesPage(){
const data =  await getData()
  console.log(data, "data");
  return (
    <>
    <div className={Style.placesContainer}>
      {data ? (
        data.map((item: any, index: any) => {
          return <Cards key={index} elementData={item} />;
        })
      ) : (
        <p>There in no data</p>
      )}
    </div>
    </>

  );
};


