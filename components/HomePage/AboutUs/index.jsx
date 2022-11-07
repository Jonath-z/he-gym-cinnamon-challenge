import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import { Description } from "../../modules/cards";

const AboutUs = () => {
  return (
    <div className="bg-light-gray relative">
      <div className="py-20 lg:px-10 relative lg:py-44 xl:max-w-6xl xl:mx-auto xl:px-0">
        <div className="px-5 flex flex-col gap-5 xl:pl-0">
          <h2 className="font-montBold text-4.5xl lg:text-large">Who we are</h2>
          <Description>
            Meet our international teams made up of 86
            <br className="hidden lg:block" /> innovators, branched into 8
            departments,
            <br className="hidden lg:block" /> that influence the market
            throughout 20 different countries.
          </Description>

          <div className="lg:hidden">
            <Image
              src="/images/who-we-are.webp"
              alt="who we are"
              width={280}
              height={444}
            />
          </div>

          <div className="hidden lg:flex gap-10 justify-between w-3/5 py-10">
            <ul className="flex flex-col gap-8 font-montBold text-slg">
              <li>Product design</li>
              <li>Web development</li>
              <li>Mobile development</li>
              <li>Quality assurance</li>
              <li>Marketing</li>
            </ul>
            <ul className="flex flex-col gap-8 font-montBold text-slg">
              <li>Project management</li>
              <li>Human resources</li>
              <li>Sales</li>
              <li>Fluffy friends</li>
            </ul>
          </div>

          <div>
            <Button title="Read About Us" />
          </div>
        </div>

        <div className="hidden absolute right-0 top-0 bottom-0 lg:flex flex-col items-center xl:hidden">
          <div className="w-340 h-539 relative my-auto">
            <Image
              src="/images/who-we-are.webp"
              alt="who we are"
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden absolute right-0 top-0 bottom-0 xl:flex flex-col items-center">
        <div className="w-340 xl:w-512 xl:h-percentage-70 relative my-auto">
          <Image
            src="/images/who-we-are.webp"
            alt="who we are"
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
