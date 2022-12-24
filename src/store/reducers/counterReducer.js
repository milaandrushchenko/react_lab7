import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    value: 20,
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounter(state, action) {
            state.value += Number(action.payload)
        },
        decreaseCounter(state, action) {
            state.value -= Number(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { increaseCounter, decreaseCounter, } = counterSlice.actions

export default counterSlice.reducer