import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import { Description } from "../../modules/cards";

const Collegues = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col px-5 py-20 lg:flex-row lg:space-x-40 lg:py-28 lg:px-10 lg:relative lg:overflow-hidden xl:max-w-6xl xl:mx-auto xl:px-0">
        <div>
          <Image
            src="/images/college.webp"
            alt="collegues image"
            width={300}
            height={197}
          />
        </div>

        <div className="py-10">
          <Description>
            Seize the unique opportunity to participate{" "}
            <br className="hidden lg:block" /> in a wide range of courses
            conducted by
            <br className="hidden lg:block" /> professionals with an impeccable
            <br className="hidden lg:block" />
            reputation in the digital industry.
          </Description>
          <div className="py-5">
            <Button title="See How It Works" />
          </div>
        </div>

        <div className="hidden lg:block absolute -bottom-10 right-0 xl:hidden">
          <Image
            src="/images/cinn-college-illustration.webp"
            alt="collegue illustation"
            width={556}
            height={402}
          />
        </div>
      </div>

      <div className="hidden absolute -bottom-10 right-0 xl:block">
        <Image
          src="/images/cinn-college-illustration.webp"
          alt="collegue illustation"
          width={556}
          height={402}
        />
      </div>
    </section>
  );
};

export default Collegues;
