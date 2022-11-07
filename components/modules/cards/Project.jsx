import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
  const {
    imageUrl,
    title,
    description,
    themes = [],
    background,
    mdTitle,
  } = project;
  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative h-169 md:h-333 md:w-full lg:h-458 cursor-pointer overflow-hidden lg:mt-20 py-3 transition-all"
        style={{ background }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          className="hover:scale-105 transition-all ease-in-out duration-500"
        />
      </div>
      <p className="flex flex-wrap gap-4 text-xsm text-dark-semi-gray font-montHavy lg:mt-6">
        {themes?.map((theme, index) => {
          return (
            <span key={index} className="uppercase">
              {theme}
            </span>
          );
        })}
      </p>

      <h1 className="text-3xl font-montBold whitespace-pre-line md:hidden py-2">
        {title}
      </h1>
      <h1 className="text-3xl font-montBold whitespace-pre-line hidden md:block lg:text-[40px] lg:leading-large">
        {mdTitle}
      </h1>
      <p className="text-base font-montHavy-extralight font-semibold text-text-primary md:mr-5 lg:whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default Project;
