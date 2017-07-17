import * as actions from '../actions/actions';

export default function visibilityFilter(state = actions.VisibilityFilters.SHOW_ALL, action) {
    switch(action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}