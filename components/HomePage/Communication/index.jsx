/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Description, ViewMore } from "../../modules/cards";

const Communication = () => {
  return (
    <section>
      <div className="px-5 py-20 relative lg:px-10 lg:py-28 xl:max-w-6xl xl:mx-auto xl:px-0">
        <div className="relative">
          <div className="absolute -top-20 -left-7 lg:-left-9 text-175 lg:text-258 lg:-top-32 font-montBold text-double-quote rotate-180 xl:flex">
            ,<span className="lg:hidden xl:block">,</span>
          </div>
          <h1 className="font-montBold text-medium-large leading-44 lg:text-4.5xl lg:leading-large">
            They’re consistent,
            <br className="md:hidden" /> and the
            <br className="md:hidden lg:block" /> communication is
            <br className="md:hidden" /> good.
          </h1>
        </div>

        <div className="py-10">
          <Description>
            When I have a deadline, they would work extra hours on the weekend
            and after <br className="lg:block hidden" /> hours. Cinnamon gives
            the impression of being a smaller team that’s focused on
            <br className="lg:block hidden" />
            customers.
          </Description>
        </div>

        <div>
          <Image
            src="/images/ceoProfile.webp"
            alt="CEO profile"
            width={68}
            height={68}
          />
          <p className="font-montBold text-slg">Garin Toren</p>
          <p className="text-base font-montHavy-extralight font-extrabold">
            CEO, ping
          </p>
        </div>

        <div className="hidden lg:block absolute w-200 h-67 right-10 top-44">
          <Image src="/images/pingLogo.webp" fill={true} alt="ping logo" />
        </div>

        <div className="py-10 lg:flex lg:justify-between">
          <div className="flex justify-start items-center gap-16">
            <Image
              src="/images/arrow-left.webp"
              alt="CEO profile"
              width={48}
              height={27}
              className="hover:-translate-y-3 transition-all duration-300 cursor-pointer ease-in-out"
            />
            <Image
              src="/images/arrow-right.webp"
              alt="CEO profile"
              width={48}
              height={27}
              className="hover:-translate-y-3 transition-all duration-300 cursor-pointer ease-in-out"
            />
          </div>
          <div className="lg:block hidden ">
            <ViewMore title="View case study" />
          </div>
        </div>

        <div className="lg:hidden">
          <ViewMore title=" View case study" />
        </div>
      </div>
    </section>
  );
};

export default Communication;
