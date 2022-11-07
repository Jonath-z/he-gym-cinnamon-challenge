import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import { Description } from "../../modules/cards";

const AgileTeam = () => {
  return (
    <section className="bg-light-gray relative">
      <div className="px-5 py-20 flex flex-col gap-9 lg:grid lg:grid-cols-2 lg:py-36 lg:relative lg:px-10 xl:max-w-6xl xl:mx-auto xl:px-0">
        <h2 className="font-montBold text-4.5xl lg:text-large lg:leading-72">
          Agile team <br /> on demand
        </h2>
        <div className="relative w-266 h-173 lg:absolute lg:bottom-0 lg:right-0 lg:-mb-2 lg:w-338 lg:h-220 xl:hidden">
          <Image src="/images/agile-team-.webp" alt="agile team" fill={true} />
        </div>

        <div className="flex flex-col gap-5">
          <Description>
            By hiring and managing talented <br className="hidden lg:block" />
            people with skills specific to your
            <br className="hidden lg:block" />
            project, we build you a team that’s
            <br className="hidden lg:block" />
            accomplished, agile and scalable in
            <br className="hidden lg:block" />
            both directions.
          </Description>

          <Button title="See How It Works" />
        </div>
      </div>

      <div className="relative w-266 h-173 lg:absolute lg:bottom-0 lg:right-0 lg:-mb-2 lg:w-338 lg:h-220 hidden xl:block">
        <Image src="/images/agile-team-.webp" alt="agile team" fill={true} />
      </div>
    </section>
  );
};

export default AgileTeam;
