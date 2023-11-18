const { createSlice } = require('@reduxjs/toolkit');

const fromReducer = createSlice({
    name: "formData",
  initialState:null,
    reducers: {
        update(state, action) {
            return(action.payload)
        }
    }
})

export const { update } = fromReducer.actions
export default fromReducer.reducer;