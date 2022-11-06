import { useCallback, useContext, useEffect, useState } from "react";
import { Grid } from "../../UI/molecules/Grid";
import { SideMenu } from "../../UI/molecules/SideMenu";
import { QueryContext } from "../../context/query/QueryProvider";
import { VIEW } from "../../common/constants/uri";
import { BaseActions } from "../../context/query/BaseActions";
import { getViewState } from "../../common/utils/helpers";

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(QueryContext);
  const [title, setTitle] = useState<any>();
  const [items, setItems] = useState<any[]>([]);

  const setView = (viewName: VIEW) => {
    dispatch(BaseActions.SetView(viewName));
  };

  const getItemsByView = () => getViewState(state);

  useEffect(() => {
    if (state?.view) setTitle(state.view);
  }, [state]);

  useEffect(() => {
    if (state) {
      setItems(getItemsByView());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Grid
      nav={<div>swapi</div>}
      main={undefined}
      details={<p>{title}</p>}
      side={<SideMenu setView={setView} />}
      footer={undefined}
    />
  );
};

export default Home;
