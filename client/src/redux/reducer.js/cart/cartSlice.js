import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     productsList: [],
     count: 0
}


export const CartSlice = createSlice({
  name: 'user',  
  initialState: initialState,
  reducers: {
  addProductToCart: (state, action) => {
   state.productsList = [...state.productsList, state.payload]
   state.count += 1;
}

  }
})


// Action creators are generated for each case reducer function
export const {addProductToCart} = CartSlice.actions // se exporta la action

export default CartSlice.reducer // se exporta el reducer