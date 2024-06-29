import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slice/userSlice';
import formReducer from './slice/formSlice'
import shortReducer from './slice/shortSlice'
import internshipReducer from './slice/internshipSlice';
import universityReducer from './slice/universitySlice';

const store = configureStore({
  reducer: {
    
    user: userSlice,
    form: formReducer, 
    short: shortReducer,
    internship: internshipReducer,   
    university: universityReducer,
  },
});

export default store;