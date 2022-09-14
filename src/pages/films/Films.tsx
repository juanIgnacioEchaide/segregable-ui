import React from "react";
import { PageTemplate } from "../../components/templates/PageTemplate";
import { UseMedia } from "../../hooks/UseMedia";

const Films = (): JSX.Element => {
  const size = UseMedia();
  return <PageTemplate viewport={size} />;
};

export default Films;
