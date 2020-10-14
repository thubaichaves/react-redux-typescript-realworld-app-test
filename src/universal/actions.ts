import { createAsyncAction } from 'typesafe-actions';
export const recordPath = createAsyncAction(
    'RECORD_PATH_REQUEST',
    'RECORD_PATH_SUCCESS',
    'RECORD_PATH_FAILURE'
  )<string, string, string>();