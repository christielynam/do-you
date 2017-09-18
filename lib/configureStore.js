import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistory from '../node_modules/history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

// const history = createHistory()


const configureStore = (initialState, initialHistory) => {
const middleware = routerMiddleware(initialHistory);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, middleware)
  )
}

export default configureStore;




// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// import createHistory from '../node_modules/history/createBrowserHistory'
// import { routerMiddleware } from 'react-router-redux'
//
// // const history = createHistory()
//
//
// const configureStore = (initialState) => {
//   const middleware = routerMiddleware(history)
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk, middleware)
//   )
// }
//
// export default configureStore;
