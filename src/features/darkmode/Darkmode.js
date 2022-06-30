import { createSlice } from '@reduxjs/toolkit'

export const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState: {value: false},
    reducers: {
        toggleDarkMode: (state) => {
            state.value = !state.value;
        },
    }
})

export const { toggleDarkMode } = darkmodeSlice.actions

export default darkmodeSlice.reducer