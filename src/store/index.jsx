import { configureStore } from "@reduxjs/toolkit"
import {userSlice} from "./slices/userSlice.js";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
    devTools: true,
})


export function clearStore(){
    store.dispatch({type: 'RESET'})
}

export default store
