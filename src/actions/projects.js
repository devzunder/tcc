export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";

export function receiveProjects(projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
}

export function deleteProject(id) {
  return {
    type: DELETE_PROJECT,
    id
  };
}

export function handleDeleteProject(id) {
  return dispatch => {
    dispatch(deleteProject(id));
  };
}

export function addProject(data) {
  return {
    type: ADD_PROJECT,
    data
  };
}

export function handleAddProject(data) {
  return dispatch => {
    dispatch(addProject(data));
  };
}
