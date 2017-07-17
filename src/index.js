import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import Home from './components/Home';
import SubHome from './components/SubHome';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import todoApp from './reducers/reducer';

//import * as actions from './actions/actions';

let store = createStore(todoApp);

// // Выведем в консоль начальное состояние
// console.log(store.getState())

// // Каждый раз при обновлении состояния - выводим его
// // Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Отправим несколько действий
// store.dispatch(actions.addTodo('Learn about actions'))
// store.dispatch(actions.addTodo('Learn about reducers'))
// store.dispatch(actions.addTodo('Learn about store'))
// store.dispatch(actions.toggleTodo(0))
// store.dispatch(actions.toggleTodo(1))
// store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED))

// // Прекратим слушать обновление состояния
// unsubscribe()

ReactDOM.render(
    // <Router history={ browserHistory }>
    //     <Route path="/" component={ App }>            
    //         <Route component={ Home }>
    //             <IndexRoute component={ SubHome } />          
    //         </Route> 
    //         <Route path="about" component={ About } />
    //     </Route>          
    // </Router>, 
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
