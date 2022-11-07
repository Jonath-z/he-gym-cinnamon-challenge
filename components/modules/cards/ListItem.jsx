import React from "react";

const ListItem = ({ children }) => {
  return (
    <li className="hover:text-blue-600 cursor-pointer transition-all duration-500 ease-in-out after:delay-200 hover:after:content-[''] after:transition-all after:duration-500 after:h-2 after:w-2 after:mt-2 after:inline-block relative after:absolute after:-bottom-3  after:left-1/2 after:rounded-full hover:after:bg-blue-600">
      {children}
    </li>
  );
};

export default ListItem;
