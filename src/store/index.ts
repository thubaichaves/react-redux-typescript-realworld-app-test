import { RootAction, RootState, Services } from 'MyTypes';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

// configure middlewares
export const history = createBrowserHistory();


let historyLocations:string[] = [];

// 监听当前 location改变
history.listen((location, action) => {
  // 获取当前 location 存储到历史浏览数组里
  const length = historyLocations.length;
  // location.pathname 的比较不能覆盖整个路径，这里只是权宜示范
  const pathname = location.pathname;
  if(length > 0){
    if(historyLocations[ length - 1 ] !== pathname){
      if(length > 1 && historyLocations[ length - 2 ] === pathname) {
        
        historyLocations.splice( length - 2, 1 );
        console.log(historyLocations);
        historyLocations = historyLocations.concat(pathname);
      }else{
        historyLocations = historyLocations.concat(pathname);
      }
    }
  }else{
    historyLocations = historyLocations.concat(pathname);
  }
  
  // location is an object like window.location
  console.log(action, location.pathname, location.state, historyLocations);
});


const middlewares = [routerMiddleware(history), epicMiddleware];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer(history, historyLocations), initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
