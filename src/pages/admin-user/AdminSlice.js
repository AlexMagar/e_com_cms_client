import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user:[]
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{
        setAdmin: (state, {payload}) => {
            state.user = payload
        }
    }
})

const { reducer, actions} = adminSlice
export const { setAdmin} = actions;
export default reducer;