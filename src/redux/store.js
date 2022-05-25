import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';

export default configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },

})