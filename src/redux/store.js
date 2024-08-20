import { configureStore} from '@reduxjs/toolkit';
import useReducer from './userSlice';


// Crear el store usando configureStore
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
