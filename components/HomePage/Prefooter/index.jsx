/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

const Prefooter = () => {
  return (
    <section className="bg-light-gray relative lg:px-10 lg:py-28">
      <div className="flex flex-col justify-center items-center gap-5 md:gap-2 py-24">
        <h1 className="font-montBold text-4.5xl hidden md:block leading-10 lg:text-large">
          Have a project in mind?
        </h1>
        <h1 className="font-montBold text-4.5xl lg:text-large">
          Let&apos;s work <br className="md:hidden" /> together.
        </h1>

        <div className="md:mt-5">
          <Button title="Contact us" />
        </div>
      </div>
      <img
        src="/images/work-together.webp"
        alt="work together"
        className="absolute bottom-0 left-0 w-32 md:w-56 lg:w-relative-26"
      />
    </section>
  );
};
export default Prefooter;
