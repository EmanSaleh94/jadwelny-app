import React from "react";
import Btn from "./Btn";

const Cards = ( props:any) => {
  console.log(props,'props card')
  return (
    <div className="card customGlass m-auto mt-0 w-72  mb-3 text-white flex flex-col items-stretch">
      <figure className=" ">
        <img
          src={props.elementData.image_url}
          alt={props.elementData.name}
        />
      </figure>
      
      <div className="card-body flex-1">
        <h2 className="card-title">{props.elementData.name}</h2>
        <p>{props.elementData.description}</p>
        <div className="card-actions justify-end">
        
          <Btn btnClassName={'btn btn-outline text-white'} content={'Discover more'} path={props.elementData.website_url}/>
        </div>
      </div>
        


    </div>
  );
};

export default Cards;
