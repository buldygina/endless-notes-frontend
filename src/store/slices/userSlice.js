import {createSlice} from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null,
        mail: null,
    }, reducers: {
        setUser(state,action){
            state.username = action.payload.username
            state.mail = action.payload.mail
        },
    },
})
export const {setUser} = userSlice.actions
export default userSlice.reducer