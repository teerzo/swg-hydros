import plantsConstants from 'constants/plants';

import * as api from '../api/index.js';

export const getPlants = () => async (dispatch) => {
  console.log('getPlants start');

  try {
    const { data } = await api.fetchPlants();
    console.log('getPlants', data);
    dispatch({ type: plantsConstants.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
    catchError(error);
  }
};

export const createPlant = (plant) => async (dispatch) => {
  try {
    const { data } = await api.createPlant(plant);

    dispatch({ type: plantsConstants.CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePlant = (id, plant) => async (dispatch) => {
  try {
    const { data } = await api.updatePlant(id, plant);

    dispatch({ type: plantsConstants.UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePlant = (id) => async (dispatch) => {
  try {
    await await api.deletePlant(id);

    dispatch({ type: plantsConstants.DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

function catchError(error) {
  console.log('catchError', error);
  if( error.message === 'Network Error') {
    window.alert('Failed to connect to server, please try again');
  }
}