// combinedReducers.js
import { counterReducer } from './counterReducer';
import { randomNumberSelector } from './randomNumberReducer';
import { combinedReducers } from 'redux';

export const rootReducer = combinedReducers({
  counter: counterReducer,
  randomNumber: randomNumberSelector// Renamed to be consistent,
});

