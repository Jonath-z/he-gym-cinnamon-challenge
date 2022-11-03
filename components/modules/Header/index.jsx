import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { ListItem } from "../cards";
import { MenuIcon, PlayIcon } from "../vectors";

const Header = () => {
  const [scrollOutOfRange, setScrollOutOfRange] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        window.pageYOffset > 50
          ? setScrollOutOfRange(true)
          : setScrollOutOfRange(false);
      };
    }
  }, []);

  return (
    <section
      className={`${
        scrollOutOfRange
          ? "bg-white transition-all duration-300"
          : "bg-transparent transition-all duration-300"
      } fixed top-0 left-0 right-0 z-20`}
    >
      <div className="flex justify-between p-5 ld:flex lg:justify-between lg:items-center lg:px-10 xl:max-w-6xl xl:px-0 xl:mx-auto">
        <Image
          src={
            scrollOutOfRange
              ? "/svgs/logo-dark.svg"
              : "/svgs/logo-white.97f0c2c8.svg"
          }
          alt="company logo"
          width={160}
          height={20}
        />

        <div className="hidden lg:flex items-center gap-10">
          <ul
            className={`${
              scrollOutOfRange ? "text-black" : "text-white"
            } font-montSemiBold text-base flex gap-8`}
          >
            <ListItem>Projects</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Blog</ListItem>
          </ul>

          <div
            className={`w-fit h-fit ${
              scrollOutOfRange
                ? "bg-white border-[#5135FF]"
                : "bg-[#1C1C1C] border-white"
            } border-[3px] transition-box-shadow hover:shadow-button duration-300 ease-in-out hover:border-[#5135FF]
            rounded-full p-2 cursor-pointer`}
          >
            <PlayIcon
              className={`${
                scrollOutOfRange
                  ? "text-[#5135FF] hover:text-white"
                  : "text-white"
              } text-3xl`}
            />
          </div>
          <Button title="Conctact us" />
        </div>

        <MenuIcon
          className={`${
            scrollOutOfRange ? "text-black" : "text-white"
          } h-6 w-6 lg:hidden`}
        />
      </div>
    </section>
  );
};

export default Header;
