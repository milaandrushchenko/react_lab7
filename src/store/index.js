import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer

    }
})