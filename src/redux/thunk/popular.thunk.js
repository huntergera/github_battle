import {getReposFailure, getReposLoading, getReposSuccess} from "../actions/popular.actions";
import {fetchPopularRepos} from "../../utils/api";

export const fetchPopularReposThunk = (language) => (dispatch) => {
    dispatch(getReposLoading());
    return fetchPopularRepos(language)
        .then(data => dispatch(getReposSuccess(data)))
        .catch(error => dispatch(getReposFailure(error.message)))
}