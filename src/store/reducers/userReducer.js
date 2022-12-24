import { createSlice } from '@reduxjs/toolkit'


const defaultState = {
    users: [],
};

export const userSlice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers: {
        addUserAction(state, action) {
            state.users = [...state.users, action.payload];
            console.log(state.users);
        },
        addUsersAction(state, action) {
            state.users = [...state.users, ...action.payload];
            console.log(state.users);
        },
        removeUserAction(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload);
            console.log(state.users);
        }
    }
})

// Action creators are generated for each case reducer function
export const { addUserAction, addUsersAction, removeUserAction } = userSlice.actions

export default userSlice.reducer