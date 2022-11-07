import React from "react";

const Hero = () => {
  return (
    <section className="bg-hero bg-black/90 pt-28">
      <div className="px-5 pt-5 animate-fadin lg:py-20 lg:px-10 xl:max-w-6xl xl:mx-auto xl:px-0 opacity-100 transition-all delay-300 duration-500 ease-in">
        <h1 className="text-white text-4.5xl md:text-5xl md:leading-large font-montHavy font-bold lg:text-extra-large lg:leading-extra-large">
          Results focused design & <br className="hidden lg:block" />
          development
          <br className="md:hidden" />
          agency.
        </h1>

        <p className="text-semi-gray font-montHavy-extralight font-semibold text-lg lg:text-slg leading-8 pt-10 pb-28 md:mr-8 md:pt-8">
          Extend your team with our high performing specialists or hire us
          <br className="hidden lg:block" /> to shape your product from scratch.
          Either way, we’ll get your
          <br className="hidden lg:block" /> product off the ground and build a
          momentum for your
          <br className="hidden lg:block" /> success.
        </p>
      </div>
    </section>
  );
};

export default Hero;
