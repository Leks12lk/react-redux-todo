import * as actions from '../actions/actions';

export default function todos(state = [], action) {
    switch(action.type) {
        case actions.ADD_TODO:
            return [
                ...state,
                {
                    title: action.title,
                    completed: false
                }
            ]
        case actions.TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                  return todo;
            })
        default:
            return state;
    }
}
