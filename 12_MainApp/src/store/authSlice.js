import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    status=false,
    userData: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{ }
})

export default authSlice.reducer