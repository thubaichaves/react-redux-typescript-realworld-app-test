import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import articles from '../features/articles/reducer';

const rootReducer = (history: History<any>, historyLocations: string[]) =>
  combineReducers({
    router: connectRouter(history),
    previous: () => history.goBack,
    historyLocations: () => historyLocations,
    articles,
  });

export default rootReducer;
