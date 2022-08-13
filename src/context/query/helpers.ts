import { SwapiResponse } from "../../common";
import { getPageFromUri } from "../../common/utils/helpers";
import { BaseActions } from "./BaseActions";

const paginationHandler = (data: SwapiResponse<any>) => {
    return async (dispatch: React.Dispatch<any>) =>
        Promise.all([
            // set the previous page
            dispatch(BaseActions.SetPrevUri(data?.previous || "")),

            // set the next page to fetch
            dispatch(BaseActions.SetNextUri(data?.next || "")),

            // set the pages to be displayed at UI
            dispatch(
                BaseActions.UpdatePages({
                    currentPage: getPageFromUri(data?.next) - 1,
                    prevPage: getPageFromUri(data?.previous),
                    nextPage: getPageFromUri(data?.next),
                })
            ),
        ]);
};

const peopleSuccessHandler = (data: SwapiResponse<any>) => {
    // promise succeeded => dispatch to state
    if (data?.results.length) {
        // context state updated according to route
        return async (dispatch: React.Dispatch<any>) => Promise.all([
            //update pagination at state and UI
            dispatch(paginationHandler(data)),
            //populates people at state
            dispatch(BaseActions.UpdatePeople(data?.results)),

            //populates people to be displayed at UI
            dispatch(BaseActions.UpdateDisplayedPeople(data?.results)),
        ]);
    }
};

const planetsSuccessHandler = (data: SwapiResponse<any>) => {
    // promise succeeded => dispatch to state
    if (data?.results.length) {
        // context state updated according to route
        return async (dispatch: React.Dispatch<any>) => Promise.all([
            //update pagination at state and UI
            dispatch(paginationHandler(data)),
            //populates people at state
            dispatch(BaseActions.UpdatePeople(data?.results)),

            //populates people to be displayed at UI
            dispatch(BaseActions.UpdateDisplayedPeople(data?.results)),
        ]);
    }
};

const starShipSuccessHandler = (data: SwapiResponse<any>) => {
    // promise succeeded => dispatch to state
    if (data?.results.length) {
        // context state updated according to route
        return async (dispatch: React.Dispatch<any>) => Promise.all([
            //update pagination at state and UI
            dispatch(paginationHandler(data)),
            //populates people at state
            dispatch(BaseActions.UpdatePeople(data?.results)),

            //populates people to be displayed at UI
            dispatch(BaseActions.UpdateDisplayedPeople(data?.results)),
        ]);
    }
};

export {
    paginationHandler, 
    peopleSuccessHandler,
    planetsSuccessHandler,
    starShipSuccessHandler,
}