import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Card = ({ name, job, image, alt, text , State , setState , Datalength }) => {
    function leftHandler() {
        setState((State - 1 + Datalength) % Datalength)
    }   
    function rightHandler() {
        setState((State + 1) % Datalength)
    } 
return (
    <div className="relative w-[800px] bg-[#fefefe]  flex flex-col m-20 justify-center items-center">
      <div>
        <img src={image} alt={alt} className="w-[150px] absolute left-3 -top-20 m-3 h-auto rounded-full " />
      </div>
      <div className="text-center flex flex-col  items-center w-[650px] pt-[50px] pb-[30px]">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-2xl  text-[#8E90B0] pb-6">{job}</p>
        <FaQuoteLeft className="text-[#9286d3] " />
        <p className="text-lg py-6">{text}</p>
        <FaQuoteRight className="text-[#9286d3]" />
        <span className="flex gap-x-10 mb-2 mt-11">
          <FiChevronLeft onClick = {leftHandler} className="text-[#8474F4] text-[30px] " strokeWidth={3}/>
          <FiChevronRight onClick={rightHandler} className="text-[#7E6EE8] text-[30px] " strokeWidth={3}/>
        </span>
        <button className=" bg-[#8474f4] px-8 py-4 mt-5 text-[18px] text-white font-bold rounded-xl" >Surprise Me</button>
      </div>
    </div>
  );
};

export default Card;
