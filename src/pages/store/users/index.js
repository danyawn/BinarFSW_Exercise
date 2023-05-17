import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUsers = createAsyncThunk('appUsers/fetchUsers', () => {
    // const response = await axios.get("https://mocki.io/v1/a796ef1d-1f42-4ee6-891d-a9cd66e533d3")

    axios.get("https://mocki.io/v1/1310c4e1-7479-468b-a485-72d10b248b52")
        .then((result) => {
            // console.log("result", result.data)
            return result.data
        }).catch((err) => {
            console.log(err)
        });
})

export const appUsersSlice = createSlice({
    name: 'appUsers',
    initialState: {
        users: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("action", action)
            state.users = action.payload
        })
    }
})

export default appUsersSlice.reducer