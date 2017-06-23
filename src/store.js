import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import * as actions from './actions';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
<<<<<<< HEAD
 const store=window.store = createStore(reducer, /* preloadedState, */ composeEnhancers(
=======
 const store =window.store= createStore(reducer, /* preloadedState, */ composeEnhancers(
>>>>>>> 40eae536c481e8d5618965bf78ea08a1c04370e8
    applyMiddleware(thunkMiddleware)
  ));



  // const store =window.__REDUX_DEVTOOLS_EXTENSION__  ? createStore(
  //  IDE_REDUX, /* preloadedState, */ 
  //  //thunkMiddleware,
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ) :createStore(IDE_REDUX);
 /* eslint-enable */

// const store =window.store= createStore(IDE_REDUX);
export default store;  














