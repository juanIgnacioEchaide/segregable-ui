import React from "react";
import { VIEW } from "../../common/constants/uri";
import { BaseBox } from "../../components/atoms/Box";

const People = (): JSX.Element => {
  enum mode {
    daylight = "daylight",
    night = "night",
  }
  return (
    <BaseBox
      mode={mode.daylight}
      primary
      view={VIEW.DEFAULT}
      size={""}
      theme={""}
    >
      PEOPLE
    </BaseBox>
  );
};

export default People;
