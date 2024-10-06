import React from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const cartURL = "http://localhost:3000/api/carts";

export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId, thunkAPI) => {

    try {
        const response = await axios.get(`${cartURL}/${userId}`)
        console.log(response.data);
        localStorage.setItem("cartInfo", response.data.cart);
        return response.data;
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})
export const addCart = createAsyncThunk('cart/addCart', async ({ userId, quantity }, thunkAPI) => {
    try {
        const response = await axios.post(`${cartURL}`, {
            userId: userId,
            items: quantity
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        localStorage.setItem("cartInfo", response.data.cart);
        console.log(response.data);
        return response.data;
    }

    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }

})
export const deleteCart = createAsyncThunk('cart/deleteCart', async ({ userId, item }, thunkAPI) => {
    try {
        const response = await axios.delete(`${cartURL}/${userId}/item/${item}`);
        localStorage.setItem("cartInfo", response.data.cart);
        return response.data
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

const initialState = {
    items: localStorage.getItem("cartInfo") | [],
    loading: false,
    err: null
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                console.log('fetchCart.pending triggered');
                state.loading = true,
                    state.err = null
            })

            .addCase(fetchCart.fulfilled, (state, action) => {
                console.log('fetchCart.fulfilled triggered');
                state.loading = false,
                    state.items = action.payload;

            })

            .addCase(fetchCart.rejected, (state, action) => {
                console.log('fetchCart.rejected triggered');
                state.loading = false,
                    state.err = action.payload;
            })
        builder
            .addCase(addCart.pending, (state) => {
                state.loading = true,
                    state.err = null
            })
            .addCase(addCart.fulfilled, (state, action) => {
                console.log('fetchCart.fulfilled triggered');
                state.loading = false,
                    state.items = action.payload;
            })
            .addCase(addCart.rejected, (state, action) => {
                state.loading = false,
                    state.err = action.payload || "Something wrong here!!!"
            })
        builder
            .addCase(deleteCart.pending, (state) => {
                state.loading = true,
                    state.err = null
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                console.log('deleteCart.fulfilled triggered');
                state.loading = false,
                    state.items = action.payload;
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.loading = false,
                    state.err = action.payload || "Something wrong here!!!"
            })

    }


})
export default cartSlice.reducer;