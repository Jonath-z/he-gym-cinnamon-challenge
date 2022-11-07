import Image from "next/image";
import React from "react";
import Button from "../Button";
import {
  BasketBallIcon,
  BehanceIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WifiIcon,
} from "../vectors";

const Footer = () => {
  return (
    <section className="bg-hero bg-black/90">
      <div className="px-5 pt-20 pb-8 lg:px-10 animate-fadin xl:max-w-6xl xl:mx-auto xl:px-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-56 lg:w-2/4">
            <Image
              src="/svgs/logo-white.97f0c2c8.svg"
              alt="company logo"
              width={160}
              height={20}
            />

            <ul className="text-semi-gray hidden font-montHavy-extralight text-base font-semibold md:grid grid-cols-2 md:grid-cols-1 justify-between items-center py-10">
              <ul className="space-y-5 md:space-y-4">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Services</li>
              </ul>
              <ul className="space-y-5 md:space-y-4 md:mt-4">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Blog</li>
              </ul>
            </ul>
          </div>

          <div className="lg:w-full">
            <h4 className="text-white text-2xl font-montBold lg:text-medium-large">
              All software,
              <br className="md:hidden" /> zero bullshit.
            </h4>
            <div className="md:grid grid-cols-2 gap-6 text-semi-gray hidden md:grid-cols-3 md:mt-8">
              <div className="">
                <p className="font-montBold py-1">Zagreb</p>
                <p className="font-montHavy-extralight font-semibold text-sm md:leading-6">
                  Slavonska <br className="hidden md:block lg:hidden" /> avenija
                  6,
                  <br className="hidden lg:block" />
                  <br className="hidden md:block lg:hidden" /> 10000, Zagreb,
                  Croatia
                </p>
                <p className="font-montHavy-extralight font-semibold text-sm  md:leading-6">
                  +385 99 347
                  <br className="hidden md:block lg:hidden" /> 3103
                </p>
              </div>
              <div>
                <p className="font-montBold py-1">New York</p>
                <p className="font-montHavy-extralight font-semibold text-sm  md:leading-6">
                  500 7th Ave,
                  <br className="hidden md:block lg:hidden" /> New York,
                </p>
                <p className="font-montHavy-extralight font-semibold text-sm  md:leading-6">
                  NY 10018,
                  <br className="hidden md:block lg:hidden" /> United States
                </p>
              </div>
              <div>
                <p className="font-montBold py-1">Belgrade</p>
                <p className="font-montHavy-extralight font-semibold text-sm leading-27 md:leading-6">
                  Bulevar <br className="hidden md:block lg:hidden" />
                  vojvode
                  <br className="hidden md:block lg:hidden" /> Mišića
                  <br className="md:hidden lg:hidden" /> 37
                  <br className="hidden md:block lg:hidden" />
                </p>
                <p className="font-montHavy-extralight font-semibold text-sm pt-1 md:leading-6">
                  11000,
                  <br className="hidden md:block lg:hidden" /> Belgrade,
                  <br className="hidden md:block lg:hidden" /> Serbia
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="text-semi-gray md:hidden font-montHavy-extralight text-base font-semibold grid grid-cols-2 md:grid-cols-1 justify-between items-center py-10">
          <ul className="space-y-5 md:space-y-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Services</li>
          </ul>
          <ul className="space-y-5 md:space-y-4 md:mt-4">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </ul>

        <div className="grid grid-cols-2 gap-6 text-semi-gray md:hidden">
          <div>
            <p className="font-montBold py-1">Zagreb</p>
            <p className="font-montHavy-extralight font-semibold text-sm">
              Slavonska avenija 6, 10000, Zagreb, Croatia
            </p>
            <p className="font-montHavy-extralight font-semibold text-sm">
              +385 99 347 3103
            </p>
          </div>
          <div>
            <p className="font-montBold py-1">New York</p>
            <p className="font-montHavy-extralight font-semibold text-sm">
              500 7th Ave, New York,
            </p>
            <p className="font-montHavy-extralight font-semibold text-sm">
              NY 10018, United States
            </p>
          </div>
          <div>
            <p className="font-montBold py-1">Belgrade</p>
            <p className="font-montHavy-extralight font-semibold text-sm leading-[27px]">
              Bulevar vojvode Mišića <br /> 37
            </p>
            <p className="font-montHavy-extralight font-semibold text-sm pt-1">
              11000, Belgrade, Serbia
            </p>
          </div>
        </div>

        <div className="text-white mt-10 md:hidden">
          <p className="font-montBold pt-10 pb-8">Our newsletter</p>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-semi-gray font-montHavy-extralight font-semibold -mb-2 text-base"
            >
              Your E-mail
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent outline-none border-b-2 mr-8"
            />
          </div>

          <div className="mr-8 py-5">
            <Button title="Subscribe" fullWidth={true} />
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:items-end md:justify-between">
          <div>
            <Image
              src="/svgs/pangea-badge.svg"
              alt="pangea image"
              width={200}
              height={56}
              className="mx-auto py-10"
            />

            <Image
              src="/images/clutch-badge.webp"
              alt="clutch image"
              width={216}
              height={65}
              className="mx-auto"
            />
          </div>

          <div className="text-white mt-10 hidden md:block lg:w-[285px]">
            <p className="font-montBold pt-10 pb-8">Our newsletter</p>

            <div className="flex flex-col">
              <div className="relative">
                <input
                  type="text"
                  id="floating_filled"
                  className="block rounded-t-lg pt-5 w-full font-montSemiBold text-base bg-transparent text-white border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                />
                <label
                  htmlfor="floating_filled"
                  className="absolute text-base text-semi-gray font-montHavy-extralight font-semibold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Your E-mail
                </label>
              </div>
            </div>

            <div className="mr-8 py-5 md:pb-0 md:mr-0">
              <Button title="Subscribe" fullWidth={true} />
            </div>
          </div>

          <p className="text-semi-gray font-montHavy-extralight font-semibold underline mx-auto w-fit mt-14 md:mx-0">
            hello@cinnamon.agency
          </p>
        </div>

        <div className="md:flex md:justify-between md:items-center md:border-t md:border-white/20 md:mt-9">
          <p className="text-white/60 font-montHavy-extralight md:flex justify-center gap-6 font-semibold mt-5 hidden">
            <span>© 2022 Cinnamon</span>
            <span className="underline">Privacy Policy</span>
          </p>
          <div className="text-white flex justify-center gap-6 py-7 md:py-2 border-t border-b border-white/20 mt-7 md:border-none">
            <LinkedInIcon className="w-5 h-5" />
            <BasketBallIcon className="w-5 h-5" />
            <BehanceIcon className="w-5 h-5" />
            <InstagramIcon className="w-5 h-5" />
            <FacebookIcon className="w-5 h-5" />
            {/* <WifiIcon /> */}
          </div>
        </div>

        <p className="text-white/60 font-montHavy-extralight flex justify-center gap-6 font-semibold mt-5 md:hidden">
          <span>© 2022 Cinnamon</span>
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
