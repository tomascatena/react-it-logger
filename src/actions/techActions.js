import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

const url =
  'https://my-json-server.typicode.com/tomascatena/react-it-logger-json-server';

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`${url}/techs`);
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error,
    });
  }
};

// Add technician to server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`${url}/techs`, {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error,
    });
  }
};

// Delete a technician from server
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`${url}/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
