/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LocationIcon } from "../vectors";
import Description from "./Description";

const Location = ({ location }) => {
  const { imageUrl, address, town } = location;
  return (
    <div className="w-fit flex flex-col gap-5 cursor-pointer hover:text-blue-primary transition-all duration-100 ease-in-out">
      <div className="w-fit">
        <img src={imageUrl} alt={town} className="w-254 md:w-544" />
      </div>

      <div className="w-254 md:w-544 flex gap-5 items-start font-extrabold hover:text-blue-primary transition-all duration-100 ease-in-out cursor-pointer">
        <LocationIcon className="w-8 h-8 lg:w-6 lg:h-6" />
        <div className="flex flex-col gap-3 ">
          <p className="font-montBold md:text-slg lg:text-2xl">{town}</p>
          <Description effectOnHover={true}>{address}</Description>
        </div>
      </div>
    </div>
  );
};

export default Location;
