import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    username: '',
    token: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const { setUsername, setToken, setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
