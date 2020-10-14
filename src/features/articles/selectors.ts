import { RootState } from 'MyTypes';
// import { createSelector } from 'reselect';

export const getArticles = (state: RootState) => state.articles.articles;


export const getHistoryLocations = (state: RootState) => state.historyLocations