import {
  RECEIVE_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT
} from "../actions/projects";

export default function projects(state = [], action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return state;
    case DELETE_PROJECT:
      return state.filter(projects => state.indexOf(projects) !== action.id);
    case ADD_PROJECT:
      return state.concat([action.data]);
    default:
      return state;
  }
}
