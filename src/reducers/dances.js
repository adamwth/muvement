import { combineReducers } from 'redux';
import { ADD_DANCE, EDIT_STAGE_DIMENSIONS, PUBLISH_DANCE, REMOVE_DANCE, RENAME_DANCE, UNPUBLISH_DANCE } from '../constants/actionTypes';
import { defaultStageDim } from '../constants/defaults';
import { dummyDances } from '../constants/dummyData';
import dancers from './dancers';
import frames from './frames';

const danceNameReducer = (state = "", action) => action.type === RENAME_DANCE ? action.payload : state;

const dancePublishedReducer = (state = false, action) => {
  switch (action.type) {
    case PUBLISH_DANCE:
      return true;
    case UNPUBLISH_DANCE:
      return false;
    default:
      return state;
  }
}

const stageDimReducer = (state = defaultStageDim, action) => {
  switch (action.type) {
    case EDIT_STAGE_DIMENSIONS: {
      const { payload: editedDimensions } = action;
      return {
        ...state,
        ...editedDimensions
      };
    }
    default:
      return state;
  }
};

const danceReducer = combineReducers({
  name: danceNameReducer,
  published: dancePublishedReducer,
  stageDim: stageDimReducer,
  dancers,
  frames
});

// Dances
// TODO: Remove dummy dance when deploying
export default (state = dummyDances, action) => {
  switch (action.type) {
    case ADD_DANCE: {
      const { danceId, dance } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          danceId: dance
        },
        myDances: [...state.myDances, danceId]
      }
    }
    case REMOVE_DANCE: {
      const { payload: idToRemove } = action;
      const { [idToRemove]: _, ...prunedByIds } = state.byId;
      return {
        ...state,
        byId: prunedByIds,
        myDances: state.myDances.filter(danceId => danceId !== idToRemove)
      }
    }
    default: {
      if (action.danceId !== null && action.danceId !== undefined) {
        const { danceId, ...prunedAction } = action;
        return {
          ...state,
          byId: {
            ...state.byId,
            [danceId]: danceReducer(state.byId[danceId], prunedAction)
          }
        }
      }
      return state;
    }
  }
}