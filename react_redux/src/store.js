import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from './features/reducer';

export default configureStore({
  reducer: {
    counter: reducerSlice,
  },
});
