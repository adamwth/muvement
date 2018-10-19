import {
  ADD_DANCE,
  ADD_DANCER,
  ADD_FRAME,
  EDIT_STAGE_DIMENSIONS,
  REMOVE_DANCER,
  REORDER_FRAME,
  SET_LABELS_VIEW,
  SWITCH_ACTIVE_DANCE,
  SWITCH_ACTIVE_FRAME
} from "../constants/actionTypes";
import {defaultStageDim} from "../constants/defaults";

function containsDancer(danceId, name, state) {
  return state.dances[danceId].dancers.includes(name);
}

function hasFrame(danceId, frameId, state) {
  return frameId >= 0 && frameId < state.dances[danceId].frames.length
}

function hasDance(danceId, state) {
  return danceId >= 0 && danceId < state.dances.length
}

export function addDance(danceName, names) {
  return (dispatch, getState) => {
    const newDance = {
      name: danceName,
      stageDim: defaultStageDim,
      dancers: names,
      frames: []
    };
    dispatch({
      type: ADD_DANCE,
      payload: newDance
    })
    dispatch({
      type: SWITCH_ACTIVE_DANCE,
      payload: getState().dances.length - 1
    })
  }
}

export function addDancers(danceId, names) {
  return (dispatch, getState) => {
    names.forEach((name) => {
      if (!containsDancer(danceId, name, getState())) {
        dispatch({
          type: ADD_DANCER,
          danceId: danceId,
          payload: name
        })
      } else {
        console.log("[ERROR] Duplicate dancer name")
      }
    });
  }
}

export function removeDancers(danceId, names) {
  return (dispatch, getState) => {
    names.forEach((name) => {
      if (containsDancer(danceId, name, getState())) {
        dispatch({
          type: REMOVE_DANCER,
          danceId: danceId,
          payload: name
        })
      } else {
        console.log("[ERROR] Dancer does not exist")
      }
    });
  }
}

export function editStageDimensions(danceId, toEdit) {
  return dispatch => {
    if ((toEdit.width && toEdit.width <= 0)
      || (toEdit.height && toEdit.height <= 0)
      || (toEdit.gridSize && toEdit.gridSize < 0)) {
      console.log("[ERROR] Dimensions must be greater than 0")
    } else {
      dispatch({
        type: EDIT_STAGE_DIMENSIONS,
        danceId: danceId,
        payload: toEdit
      })
    }
  }
}

export function addAndSetActiveFrame(danceId, frameId) {
  return dispatch => {
    if (frameId < 0) {
      console.log("[ERROR] Index cannot be negative")
    } else {
      dispatch({
        type: ADD_FRAME,
        danceId: danceId,
        payload: frameId
      });
      dispatch({
        type: SWITCH_ACTIVE_FRAME,
        payload: frameId
      })
    }
  }
}

export function gotoFrame(danceId, targetFrameId) {
  return (dispatch, getState) => {
    // checks if frame is correct
    if (!hasFrame(danceId, targetFrameId, getState())) {
      console.log("[ERROR] Index out of bounds")
    } else {
      dispatch({
        type: SWITCH_ACTIVE_FRAME,
        payload: targetFrameId
      })
    }
  }
}

export function gotoDance(danceId) {
  return (dispatch, getState) => {
    // checks if frame is correct
    if (!hasDance(danceId, getState())) {
      console.log("[ERROR] Index out of bounds")
    } else {
      dispatch({
        type: SWITCH_ACTIVE_DANCE,
        payload: danceId
      })
    }
  }
}

export function toggleLabels() {
  return (dispatch, getState) => {
    console.log("TOGGLE");
    dispatch({
      type: SET_LABELS_VIEW,
      payload: !getState().UI.showLabels
    })
  }
}

export function reorderAndFocusFrame(danceId, fromIndex, toIndex) {
  return (dispatch, getState) => {
    if (hasFrame(danceId, fromIndex, getState()) && hasFrame(danceId, toIndex, getState())) {
      dispatch({
        type: REORDER_FRAME,
        danceId: danceId,
        payload: {
          fromIndex: fromIndex,
          toIndex: toIndex
        }
      })
      dispatch({
        type: SWITCH_ACTIVE_FRAME,
        payload: toIndex
      })
    } else {
      console.log("[ERROR] Index out of bounds")
    }
  }
}