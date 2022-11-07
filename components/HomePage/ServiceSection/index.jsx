import React from "react";
import { services } from "../../data";
import Button from "../../modules/Button";
import { Service } from "../../modules/cards";

const ServiceSection = () => {
  return (
    <section className="bg-hero bg-black/90">
      <div className="px-5 py-20 lg:flex lg:py-28 lg:px-10 xl:max-w-6xl xl:mx-auto xl:px-0">
        <h2 className="text-4.5xl font-montBold text-white font-extrabold lg:text-large lg:w-full">
          Our <br className="hidden lg:block xl:hidden" /> services
        </h2>
        <div className="py-10 flex flex-col gap-10 md:grid md:grid-cols-2 lg:w-full lg:gap-24">
          {services.map((service, index) => {
            return <Service key={index} service={service} />;
          })}

          <div className="hidden lg:block lg:mt-7">
            <Button title="See Our Services" />
          </div>
        </div>

        <div className="lg:hidden">
          <Button title="See Our Services" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
