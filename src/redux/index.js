import {connect} from "redux";
import * as addYourOwnEnzyme from "./addYourOwnEnzyme";
import * as annotationLabelVisibility from "./annotationLabelVisibility";
import * as annotationsToSupport from "./annotationsToSupport";
import * as annotationVisibility from "./annotationVisibility";
import * as caretPosition from "./caretPosition";
import * as copyOptions from "./copyOptions";
import * as deletionLayers from "./deletionLayers";
import * as digestTool from "./digestTool";
import * as findTool from "./findTool";
import * as toolBar from "./toolBar";
import * as frameTranslations from "./frameTranslations";
import * as hoveredAnnotation from "./hoveredAnnotation";
import * as lineageLines from "./lineageLines";
import * as minimumOrfSize from "./minimumOrfSize";
import * as alignments from "./alignments";
import * as panelsShown from "./panelsShown";
import * as propertiesTool from "./propertiesTool";
import * as lastSavedId from "./lastSavedId";
import * as readOnly from "./readOnly";
import * as versionHistory from "./versionHistory";
import * as replacementLayers from "./replacementLayers";
import * as restrictionEnzymes from "./restrictionEnzymes";
import * as selectedAnnotations from "./selectedAnnotations";
import * as selectionLayer from "./selectionLayer";
import * as sequenceDataHistory from "./sequenceDataHistory";
import * as sequenceData from "./sequenceData";
import * as useAdditionalOrfStartCodons from "./useAdditionalOrfStartCodons";
import * as uppercaseSequenceMapFont from "./uppercaseSequenceMapFont";


import * as modalActions from "./modalActions";
import { combineReducers } from "redux";
import createAction from "./utils/createMetaAction";
export vectorEditorMiddleware from "./middleware";

const subReducers = {
  addYourOwnEnzyme,
  annotationLabelVisibility,
  annotationsToSupport,
  annotationVisibility,
  caretPosition,
  copyOptions,
  deletionLayers,
  digestTool,
  toolBar,
  findTool,
  frameTranslations,
  hoveredAnnotation,
  lineageLines,
  minimumOrfSize,
  alignments,  
  panelsShown,
  propertiesTool,
  lastSavedId,
  readOnly,
  versionHistory,
  replacementLayers,
  restrictionEnzymes,
  selectedAnnotations,
  selectionLayer,
  sequenceDataHistory,
  sequenceData,
  useAdditionalOrfStartCodons,
  uppercaseSequenceMapFont,
}

const vectorEditorInitialize = createAction("VECTOR_EDITOR_UPDATE");
const vectorEditorClear = createAction("VECTOR_EDITOR_CLEAR");

//export the actions for use elsewhere
export const actions = {
  ...Object.keys(subReducers).reduce((acc, k) => ({
    ...acc,
    ...subReducers[k]
  }), {}),
  ...modalActions,
  vectorEditorInitialize,
  vectorEditorClear
};

//define the reducer
let reducers = {
  ...Object.keys(subReducers).reduce((acc, k) => ({
    ...acc,
    [k]: subReducers[k].default
  }), {}),
  instantiated: () => true
};

export default function reducerFactory(initialState = {}) {
  // if (!initialState || !Object.keys(initialState).length) {
  //   throw new Error(
  //     "Please pass an initial state to the vector editor reducer like: {DemoEditor: {}}!"
  //   );
  // }
  return function(state = initialState, action) {
    let editorNames;
    let newState = {};
    if (action.meta && action.meta.editorName) {
      editorNames = Array.isArray(action.meta.editorName)
        ? action.meta.editorName
        : [action.meta.editorName];
    }
    let stateToReturn;
    if (editorNames) {
      //we're dealing with an action specific to a given editor
      editorNames.forEach(function(editorName) {
        let currentState = state[editorName];
        if (action.type === "VECTOR_EDITOR_UPDATE") {
          //merge the exisiting state with the new payload of props (if you want to do a clean wipe, use VECTOR_EDITOR_CLEAR)
          currentState = { ...state[editorName], ...(action.payload || {}) };
        }
        if (action.type === "VECTOR_EDITOR_CLEAR") {
          currentState = undefined;
        }
        newState[editorName] = combineReducers(reducers)(currentState, action);
      });
      stateToReturn = {
        ...state,
        ...newState
      };
    } else {
      //just a normal action
      Object.keys(state).forEach(function(editorName) {
        if (editorName === "__allEditorsOptions") return; //we deal with __allEditorsOptions below so don't pass it here
        newState[editorName] = combineReducers(reducers)(
          state[editorName],
          action
        );
      });
      stateToReturn = newState;
    }
    return {
      ...stateToReturn,
      //these are reducers that are not editor specific (aka shared across editor instances)
      __allEditorsOptions: {
        addYourOwnEnzyme: addYourOwnEnzyme.default(
          !state.__allEditorsOptions
            ? undefined
            : state.__allEditorsOptions.addYourOwnEnzyme,
          action
        ),
        uppercaseSequenceMapFont: uppercaseSequenceMapFont.default(
          !state.__allEditorsOptions
            ? undefined
            : state.__allEditorsOptions.uppercaseSequenceMapFont,
          action
        ),
        alignments: alignments.default(
          !state.__allEditorsOptions
            ? undefined
            : state.__allEditorsOptions.alignments,
          action
        )
      }
    };
  };
}

// export const getBlankEditor = (state) => (state.blankEditor)
export const getEditorByName = (state, editorName) => state[editorName];



// export default connect((state, ownProps) => {
//   return {
//     toggled: state.VectorEditor[ownProps.editorName].annotationVisibility.features
//   }
// })()