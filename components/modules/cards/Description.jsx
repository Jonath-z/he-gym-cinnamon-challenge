import React from "react";

const Description = ({ children, effectOnHover = false }) => {
  return (
    <p
      className={`${
        effectOnHover ? "hover:text-blue-primary" : "hover:text-text-primary"
      } text-text-primary font-montHavy-extralight font-extrabold text-base transition-all duration-100 ease-in-out`}
    >
      {children}
    </p>
  );
};

export default Description;
