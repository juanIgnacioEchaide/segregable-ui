import { MESSAGE } from "../../common/constants";
import { VIEW } from "../../common/constants/uri";
import { UpdatePayload, Action, AnyBusinessEntity } from "../../common/models/entities";
import { QueryActions } from "../../context/query/QueryActions";
import { queryByView } from "./QueryByView";


const UseQueryByView = () => {

  // API CALLS
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
    data: UpdatePayload<AnyBusinessEntity>
  ) => {
    return queryByView[viewScene]?.updateFn(data) as Action;
  };

  const setView = (view: VIEW) => {
    return QueryActions.SetView(view);
  };

  const displayGenericError = () => {
    return QueryActions.SetError(MESSAGE.GENERIC_API_ERROR);
  };

  const clearError = () => {
    return QueryActions.ClearError();
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
