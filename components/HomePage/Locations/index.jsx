import Image from "next/image";
import React from "react";
import { locations } from "../../data";
import Location from "../../modules/cards/Location";
import useCarousel from "../../modules/Hooks/useCarousel";

const Locations = () => {
  const { container, onScrollLeft, onScrollRight } = useCarousel();
  return (
    <section className="relative">
      <div className="px-5 py-20 lg:px-10 relative xl:px-0">
        <h1 className="font-montBold text-4.5xl md:pb-12 lg:text-large  xl:max-w-6xl xl:mx-auto">
          Our offices
        </h1>
        <div
          ref={container}
          className="flex overflow-x-scroll gap-8 scrollbar-hide xl:"
        >
          {locations.map((location, index) => {
            return <Location key={index} location={location} />;
          })}
        </div>

        <div className="lg:flex justify-start items-center gap-16 hidden py-10 pt-16  xl:max-w-6xl xl:mx-auto">
          <Image
            src="/images/arrow-left.webp"
            alt="CEO profile"
            width={48}
            height={27}
            onClick={onScrollRight}
          />
          <Image
            src="/images/arrow-right.webp"
            alt="CEO profile"
            width={48}
            height={27}
            className="hover:-translate-y-3 transition-all duration-300 cursor-pointer ease-in-out"
            onClick={onScrollLeft}
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
