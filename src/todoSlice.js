import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'chidolist',
    initialState: [],
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