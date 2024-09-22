import { combineReducers } from 'redux';
import weatherReducer from '../features/weather/weatherSlice';
// Import other reducers here

const rootReducer = combineReducers({
    weather: weatherReducer,
    // Add other reducers
});

export default rootReducer;
