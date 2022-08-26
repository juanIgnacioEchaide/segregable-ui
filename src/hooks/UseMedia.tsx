import { useState, useEffect } from "react";
import { SIZE } from "../common/constants";

const UseMedia = () => {
  const [size, setSize] = useState("");

  const matchSize = () => {
    let mobileSize = window.matchMedia("(max-width: 767px)");
    let desktopSize = window.matchMedia("(min-width: 768px)");

    if (mobileSize.matches) {
        setSize(SIZE.MOBILE);
    }
    if (desktopSize.matches) {
        setSize(SIZE.DESKTOP);
    }
  };

  useEffect(() => {
    matchSize();
    window.onresize = () => {
      matchSize();
    };
  }, [size]);

  return size;
};

export { UseMedia };
