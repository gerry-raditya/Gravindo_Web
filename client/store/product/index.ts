import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProp{
    product : Array<Object>
}
const initialState : IProp = {
    product: []
}
export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        setProduct(state, action){
            state.product =  action.payload
        }
    }
})

export const { 
    setProduct 
} = productSlice.actions

export default productSlice.reducer