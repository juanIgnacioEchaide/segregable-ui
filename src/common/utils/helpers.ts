import { INITIAL_PAGE } from "../constants/context";
import { SwapiResponse, UpdatePeoplePayload } from "../models/entities";

const getPageFromUri = (uri: string | null): number => {
    let pageNum = Number(uri?.split('page=')[1])
    if (!uri || !pageNum) {
        return INITIAL_PAGE
    } else {
        return pageNum
    }
}

const setPeoplePayload = (data: SwapiResponse<any>): UpdatePeoplePayload => {
    return {
        currentPage: getPageFromUri(data?.next) - 1,
        nextPage: getPageFromUri(data?.next),
        prevPage: getPageFromUri(data?.previous),
        people: data?.results,
        nextUri: data?.next,
        prevUri: data?.previous,
    }
}
export { getPageFromUri, setPeoplePayload }