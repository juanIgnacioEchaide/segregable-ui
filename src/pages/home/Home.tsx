import { useContext, useEffect, useState } from "react";
import { Grid } from "../../UI/molecules/Grid";
import { SideMenu } from "../../UI/molecules/SideMenu";
import { QueryContext } from "../../context/query/QueryProvider";
import { VIEW } from "../../common/constants/uri";
import { BaseActions } from "../../context/query/BaseActions";

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(QueryContext);
  const setView = (viewName: VIEW) => {
    BaseActions.SetView(viewName);
  };
  return (
    <Grid
      nav={<div>swapi</div>}
      main={undefined}
      details={<p>DETALLE</p>}
      side={<SideMenu setView={setView} />}
      footer={undefined}
    />
  );
};

export default Home;
