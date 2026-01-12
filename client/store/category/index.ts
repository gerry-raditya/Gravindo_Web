import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProp{
    categories : Array<Object>
}
const initialState : IProp = {
    categories: []
}
export const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers: {
        setCategories(state, action){
            state.categories =  action.payload
        }
    }
})

export const { 
    setCategories 
} = categorySlice.actions

export default categorySlice.reducer