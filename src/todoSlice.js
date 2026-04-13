import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'chidolist',
    initialState: ['Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', 'Welcome', ],
    reducers: {
        tambahTugas: (state, action) => {
            state.push(action.payload)
        },
        hapusSemua: (state) => {
            return state = []
        },
    }
})

export const {tambahTugas, hapusSemua} = todoSlice.actions