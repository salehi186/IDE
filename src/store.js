import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));


  store.dispatch(actions.sss.FetchList() );

  // const store =window.__REDUX_DEVTOOLS_EXTENSION__  ? createStore(
  //  IDE_REDUX, /* preloadedState, */ 
  //  //thunkMiddleware,
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ) :createStore(IDE_REDUX);
 /* eslint-enable */

// const store =window.store= createStore(IDE_REDUX);
export default store;  














