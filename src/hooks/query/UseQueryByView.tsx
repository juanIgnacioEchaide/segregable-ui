import { People, Planet, Starship } from "../../common";
import { MESSAGE } from "../../common/constants";
import { VIEW } from "../../common/constants/uri";
import { UpdatePayload, Action } from "../../common/models/entities";
import { QueryActions } from "../../context/query/QueryActions";
import { queryByView } from "./QueryByView";


const UseQueryByView = () => {


  const allQuery = (viewScene: VIEW) => {
    return queryByView[viewScene]?.allQuery();
  };

  const byPageQuery = (viewScene: VIEW, page: number) => {
    return queryByView[viewScene]?.byPageQuery(page);
  };

  const byIdQuery = (viewScene: VIEW, id: number) => {
    return queryByView[viewScene]?.byIdQuery(id);
  };

  const searchQuery = (viewScene: VIEW, stringParam: string) => {
    return queryByView[viewScene]?.searchQuery(stringParam);
  };

  // TO BE DISPATCHED
  const updateDispatch = (
    viewScene: VIEW,
    data: UpdatePayload<People | Planet | Starship>
  ) => {
    return queryByView[viewScene]?.updateFn(data) as Action;
  };

  const displayGenericError = () => {
    return QueryActions.SetError(MESSAGE.GENERIC_API_ERROR);
  };

  const clearError = () => {
    return QueryActions.ClearError();
  };

  const setView = (view: VIEW) => {
    return QueryActions.SetView(view);
  };

  return {
    queryByView,
    allQuery,
    byPageQuery,
    byIdQuery,
    searchQuery,
    updateDispatch,
    displayGenericError,
    clearError,
    setView,
  };
};

export { UseQueryByView };
