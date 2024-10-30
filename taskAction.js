// src/actions/taskActions.js

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const updateTask = (id, updatedDescription) => ({
    type: UPDATE_TASK,
    payload: { id, updatedDescription },
});

export const toggleFilter = (filterStatus) => ({
    type: TOGGLE_FILTER,
    payload: filterStatus,
});
