import { SIZE } from "../constants";
import { INITIAL_PAGE, StateEntity } from "../constants/context";
import { ROUTES, VIEW } from "../constants/uri";
import { BaseState, SwapiResponse, UpdatePayload } from "../models/entities";

/* extracts page number from response */
const getPageFromUri = (uri: string | null): number => {
    let pageNum = Number(uri?.split('page=')[1])
    if (!uri || !pageNum) {
        return INITIAL_PAGE
    } else {
        return pageNum
    }
}

/* extracts page number from path location */
const getLocationPath = (): VIEW => {
    return window?.location.pathname.split("/")[1] as VIEW
}

/* abstraction to partially update state for pagination */
const setUpdatePayload = (data: SwapiResponse<any>): UpdatePayload<any> => {
    return {
        currentPage: getPageFromUri(data?.next) - 1,
        nextPage: getPageFromUri(data?.next),
        prevPage: getPageFromUri(data?.previous),
        results: data?.results,
        nextUri: data?.next,
        prevUri: data?.previous,
    } as unknown as UpdatePayload<any>
}

/* abstraction to partially update state after response */
const updateAfterLoad = (entity: StateEntity, payload: any, state: BaseState) => {
    return {
        ...state,
        [entity]: payload.results,
        loading: false,
        error: false,
        errorMessage: '',
        prevPage: payload.previous,
        nextPage: payload.nextPage,
        currentPage: payload.currentPage,
        nextUri: payload.nextUri,
        prevUri: payload.prevUri,
        displayed: {
            ...state.displayed,
            [entity]: payload.results
        },
    } as BaseState
};

/* abstraction to partially update state only for displayed items */
const updateDisplayed = (entity: StateEntity, payload: any, state: BaseState) => {
    return {
        ...state,
        displayed: {
            ...state.displayed,
            [entity]: payload.results
        },
    } as BaseState
}

const isMobile = (view: SIZE) => {
    return view === SIZE.MOBILE
}

const isDesktop = (view: SIZE) => {
    return view === SIZE.MOBILE
}

const navigate = (route: ROUTES) => {
    return window.location.assign(route);
  };

export {
    getPageFromUri,
    getLocationPath,
    setUpdatePayload,
    updateAfterLoad,
    updateDisplayed,
    isMobile,
    isDesktop,
    navigate,
}