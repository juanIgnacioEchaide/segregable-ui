import React, { useContext, useEffect } from "react";
import { PageTemplate } from "../../components/templates/PageTemplate";
import { UseMedia } from "../../hooks/UseMedia";

const FilmsComponent = (): JSX.Element => {

  const size = UseMedia();
  return <PageTemplate viewport={size} />;
};

export const Films = React.memo(() => <FilmsComponent />);
export default Films;
