import { useState, useEffect, useCallback } from "react";
import { SIZE } from "../common/constants";

const UseMedia = () => {
  const [size, setSize] = useState("");

  const matchSize = useCallback(() => {
    let mobileSize = window.matchMedia("(max-width: 767px)");
    let desktopSize = window.matchMedia("(min-width: 768px)");

    if (mobileSize.matches) {
      setSize(SIZE.MOBILE);
    } else {
      setSize(SIZE.DESKTOP);
    }
  }, []);

  useEffect(() => {
    matchSize();
    window.addEventListener("onresize", () => {
      matchSize();
    });
    return () => {
      window.removeEventListener("onresize", matchSize);
    };
  }, [size, matchSize]);

  return size;
};

export { UseMedia };



