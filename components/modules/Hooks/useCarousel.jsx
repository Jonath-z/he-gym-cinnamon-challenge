import { useCallback, useEffect, useRef } from "react";

const useCarousel = () => {
  const container = useRef();

  const onScrollLeft = useCallback((e) => {
    // container.current.offsetLeft = -900;
    // container.current.setAttribute("offsetLeft", -900);
    // container.current.style.
    // console.log({ container });
  });

  const onScrollRight = useCallback((e) => {
    // container.current.offsetLeft = 900;
    // container.current.scrollLeft += -1000;
    // container.current.setAttribute("offsetLeft", 900);

    console.log({ container: container.current });
  });

  return {
    onScrollLeft,
    onScrollRight,
    container,
  };
};

export default useCarousel;
