import plantsConstants from 'constants/plants';

export function plants(state = {}, action) {
  switch (action.type) {
    case plantsConstants.FETCH_ALL:
      return action.payload;
    case plantsConstants.LIKE:
      return plants.map((plant) => (plant._id === action.payload._id ? action.payload : plant));
    case plantsConstants.CREATE:
      return [...plants, action.payload];
    case plantsConstants.UPDATE:
      return plants.map((plant) => (plant._id === action.payload._id ? action.payload : plant));
    case plantsConstants.DELETE:
      return plants.filter((plant) => plant._id !== action.payload);
    default:
      return plants;
  }
}