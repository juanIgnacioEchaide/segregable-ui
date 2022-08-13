import { INITIAL_PAGE, StateEntity } from "../constants/context";
import { Action, BaseState, SwapiResponse, UpdatePayload } from "../models/entities";

const getPageFromUri = (uri: string | null): number => {
    let pageNum = Number(uri?.split('page=')[1])
    if (!uri || !pageNum) {
        return INITIAL_PAGE
    } else {
        return pageNum
    }
}

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

const updateDisplayed = (entity: StateEntity, payload: any, state: BaseState) => {
    return {
        ...state,
        displayed: {
            ...state.displayed,
            [entity]: payload.results
        },
    } as BaseState
}

export { getPageFromUri, setUpdatePayload, updateAfterLoad, updateDisplayed }