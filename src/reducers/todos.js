import * as actions from '../actions/index';

export default function todos(state = [], action) {
    switch(action.type) {
        case actions.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ]
        case actions.TOGGLE_TODO:
            return state.map((todo, index) => {
                if(todo.id === action.id) {
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
