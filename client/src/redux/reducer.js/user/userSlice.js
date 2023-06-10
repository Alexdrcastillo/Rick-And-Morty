import { createSlice } from '@reduxjs/toolkit'

const initialState = [
   fetch("https://rickandmortyapi.com/api/character")
   .then(response => response.json())
   .then(data => {
    console.log(data)
   })
]


export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
   setUser: (state, action) => {
    state.api = action.payload.email;
    state.fullname = action.payload.fullname;
    state.token = action.payload.token
   },

  }

})

// Action creators are generated for each case reducer function
export const {setUser, unsetUser} = userSlice.actions

export default userSlice.reducer