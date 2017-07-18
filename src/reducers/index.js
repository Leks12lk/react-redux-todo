import todos from './todos';
import visibilityFilter from './visibilityFilter';
import {combineReducers} from 'redux';

// reducer with combinereducers
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;


// without combineReducers
// function todoApp(state, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

// const initialState = {
//     visibilityFilter: actions.VisibilityFilters.SHOW_ALL,
//     todos: []
// };

// all reducers before decomposition
// function todoApp(state = initialState, action) {
//     switch(action.type) {
//         case actions.SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {  
//                 visibilityFilter: action.filter
//              })
//         case actions.ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: [
//                     ...state,
//                     {
//                         title: action.title,
//                         completed: false
//                     }
//                 ]
//             })
//         case actions.TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: state.todos.map((todo, index) => {
//                     if(index === action.index) {
//                         return Object.assign({}, todo, {
//                             completed: !todo.completed
//                         })
//                     }
//                     return todo;
//                 })
//             })
//         default:
//             return state;     
//     }
// }