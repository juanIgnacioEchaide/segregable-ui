import React from "react";
import { VIEW } from "../../common/constants/uri";
import { BaseProps } from "../../common/models/props";
import { BaseBox } from "../../components/atoms/Box";

const People = (): JSX.Element => {
  return (
    <BaseBox
      view={VIEW.DEFAULT}
      size={""}
      theme={""}
      height={""}
      width={""}
      bg={""}
    >
      PEOPLE
    </BaseBox>
  );
};

export default People;
